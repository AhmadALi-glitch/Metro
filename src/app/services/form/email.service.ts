import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UserService } from 'src/app/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService{

  constructor(private service:UserService){ 
  }

  uniqueEmail() :AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.isEmailExisted(control.value).pipe(
        map((response:boolean) => response ? {notUnique:true} : null)
      )
    }
  }
  
  isEmailExisted(email:string) : Observable<boolean>{
    return this.service.getOne(email).pipe(
      map((email)=> email ? true : false)
    )
  }

}
