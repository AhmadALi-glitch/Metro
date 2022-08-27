
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Randoms } from 'src/app/classes/common/randoms';
import { AppError } from 'src/app/error-handlers/app-specefication-errors/App-Error';
import { EmailService } from 'src/app/services/form/email.service';
import { LoginService } from 'src/app/services/form/login.service';

@Component({
  selector: 'metro-login-form',
  templateUrl: './metro-login-form.component.html',
  styleUrls: ['./metro-login-form.component.css']
})
export class MetroLoginFormComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor(
    private emailservice:EmailService,
    private loginService:LoginService,
    private router:Router
    ) {        
  }

  animateString(_string:HTMLInputElement) {
    _string.style.color = Randoms.throwRandomColor();
  }

  loginForm = new FormGroup({

    cridentials : new FormGroup(
      {
        email: new FormControl('', 
            [Validators.required],
            this.emailservice.uniqueEmail()
        ),
        password: new FormControl('',
            [Validators.required]
        )
    })

  })


  get email() {
    return this.loginForm.get("cridentials.email");
  }

  get password() {
    return this.loginForm.get("cridentials.password");
  }

  get emptyEmail() {
    return this.email?.errors?.['required'] && this.email?.touched ? true : false;
  }

  get emptyPassword() {
    return this.password?.errors?.['required'] && this.password?.touched ? true : false;
  }

  get notUniqueEmail() {
    return this.email?.errors?.['notUnique'] ? false : true;
  }

  get notValidEmail() {
    return this.email?.errors?.['email'] && this.email?.touched ? true : false;
  }

  sendUserData() {
    this.loginService.add(this.loginForm.value, "")
    .subscribe({
      error:(err:any) => {
        this.loginForm.setErrors({tryAgain:true});
        console.log(err);
      }
      ,
      next : (data:any) => {
        console.log(data);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("born", data.born);
        localStorage.setItem("location", data.location);
        localStorage.setItem("aboutMe", data.aboutMe);
        localStorage.setItem("photoPath", "http://localhost:2000/" + data.image)
      },
      complete : () => {
        this.router.navigate(["/me"]);
      }
    })
  }

  toSignMode(){
    this.router.navigate(['/sign']);
  }

}