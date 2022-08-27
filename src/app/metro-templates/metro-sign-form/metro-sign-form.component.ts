
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Randoms } from 'src/app/classes/common/randoms';
import { AppError } from 'src/app/error-handlers/app-specefication-errors/App-Error';
import { EmailService } from 'src/app/services/form/email.service';
import { SignService } from 'src/app/services/form/sign.service';

@Component({
  selector: 'metro-sign-form',
  templateUrl: './metro-sign-form.component.html',
  styleUrls: ['./metro-sign-form.component.css']
})
export class MetroSignFormComponent implements OnInit{

  ngOnInit(): void {
    
  }


  emailValidator:any;

  constructor(
    private emailservice:EmailService,
    private signService:SignService,
    private router:Router
    ) {        
  }

  animateString(_string:HTMLInputElement) {
    _string.style.color = Randoms.throwRandomColor();
  }

  signForm = new FormGroup({

    cridentials : new FormGroup(
      {
        email: new FormControl('', 
            [Validators.required, Validators.email],
            this.emailservice.uniqueEmail(),
          ),
          password: new FormControl('',
            [
              Validators.required,
              Validators.nullValidator,
              Validators.minLength(6),
              Validators.maxLength(20),
            ]
          )
    }),

    informations: new FormGroup({
      name : new FormControl(''),
      birth: new FormControl(''),
      location : new FormControl(''),
      aboutMe : new FormControl('')
    })

  })


  get email() {
    return this.signForm.get("cridentials.email");
  }

  get password() {
    return this.signForm.get("cridentials.password");
  }

  get emptyName() {
    return this.email?.errors?.['required'] && this.email?.touched ? true : false;
  }

  get emptyPassword() {
    return this.password?.errors?.['required'] && this.password?.touched ? true : false;
  }

  get notUniqueEmail() {
    return this.email?.errors?.['notUnique'] ? true : false;
  }

  get notValidEmail() {
    return this.email?.errors?.['email'] && this.email?.touched ? true : false;
  }

  isform1Valid=false;

  continue() {
    this.isform1Valid = ! this.isform1Valid;
  }

  sendUserData() {
    this.sended = true;
    this.signService.add(this.signForm.value, '')
    .subscribe({
      error:(err:AppError) => {
        this.signForm.setErrors({tryAgain:true});
      }
      ,
      next : (data:any) => {
        localStorage.setItem("name", data[0]._fields[0]);
        localStorage.setItem("email", data[0]._fields[1]);
        localStorage.setItem("born", data[0]._fields[2]);
        localStorage.setItem("location", data[0]._fields[3]);
        localStorage.setItem("aboutMe", data[0]._fields[4]);

        this.router.navigate(['/me'])
      }
    })
  }

  sended = false;
  
  toLoginMode(){
    this.router.navigate(['/login'])
  }

}