import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import {RegisterService}  from '../../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  rta: string ='';
  user:User[]=[];
  public registerForm:FormGroup;


  constructor( private registerService: RegisterService,  private fb: FormBuilder) {
    
 

    this.registerForm = this.fb.group({
   
      name: '',
      surname: '',
      email: '',
      tel: '',
      date_birth: '',
      adrress: '',
      city: '',
      cp: '',
      password: '',
      status: true,
    })
}
  
ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      tel: ['', Validators.minLength(9)],
      date_birth: ['', Validators.required,],
      address: ['', Validators.required],
      city: ['', Validators.required],
      cp: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      checkbox: ['', Validators.requiredTrue],
      status: true,
    })
  };
  
  add():void{
    const {name,surname,tel, date_birth, address, city , cp, email, password, status} = this.registerForm.getRawValue();
    // const data = this.registerForm.getRawValue();
    this.registerForm.reset();
    this.registerService.addNewUser(name, surname, tel, date_birth, address, city , cp, email, password, status).subscribe(result=>{  
      if (result) {
        this.rta = result.toString();
        console.log(result);
      }
    })
  }




  

















}


