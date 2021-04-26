import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:FormGroup;

  constructor(private router : Router , private formBuilder : FormBuilder) { 
    
    this.user = this.formBuilder.group({
      Name:['' , [Validators.required]],
      UserEmail:['' , [Validators.required , Validators.pattern('[^@]+@[^\.]+\..+')]],
      UserName:['' ,[Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
      userPassword:['' , [Validators.required,  Validators.minLength(8), Validators.maxLength(16)]],
      confirmedPassword:['' ,[Validators.required]]
    })
  }
  get userControls(){
    return this.user.controls
  }
  get userPassword(){
    return this.user.controls.userPassword.value
  }
  get confirmedPassword(){
    return this.user.controls.confirmedPassword.value
  }

  signup(){
    localStorage.setItem('login' ,"true")
    this.router.navigate([''])

  }

  ngOnInit(): void {
  }

  redirectToLogin(){
    this.router.navigate(['/login'])
  }
  
  
}
