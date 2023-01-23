import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService}  from '../../services/login.service'
import { User } from '../register/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  rta: string = '';
  stylebtn: String = '';
  user:User[]=[];
  public loginForm:FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    
 
    this.loginForm = this.fb.group({
   
      email: '',
      password: '',
 
    })
}
  
ngOnInit(): void {

    this.loginForm = this.fb.group({
   
      email: ['', Validators.email],
      password: ['', Validators.minLength(8) && Validators.maxLength(20)],

    })
  };

  btnValited(): void{
    this.stylebtn = 'btn btn-secondary btn-sm'
   if ( this.loginForm.valid) {
    this.stylebtn = 'btn btn-success btn-sm';
   }
 }
  
  login():void{
    const { email, password} = this.loginForm.getRawValue();
    this.loginForm.reset();
    this.loginService.login(email, password).subscribe(result=>{  
      if (result) {
        this.rta = result.toString() ;

        if (this.rta ==='Password is not valid') {
          alert(this.rta = '⛔ Tu contreseña no es valida 🔐')
        }else if (this.rta === 'User is not registered') {
          alert(this.rta = '❌ Este usuario no está registrado 🛑')
        } else {
          const  data  = Object.values(result)
          console.log( data[1] );
          alert(`\n🤝🏼 Cheers ${data[0]}!! 🍻\n\nRecuerda beber con moderación`)
          this.router.navigate(['/shop'])
        }

      }
    })
  }

}
