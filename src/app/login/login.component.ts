import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  formLogin! :FormGroup;
  constructor(private fb:FormBuilder ,private authService:AuthService , private routeur:Router){}
 
  hide: boolean = true;
  



  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control(""),
    })
  }
  handleLogin(){
    let username=this.formLogin.value.username;
    let password=this.formLogin.value.password;
    console.log(this.formLogin.value);
    this.authService.login(username,password).subscribe({
      next: data=>{this.authService.loadProfile(data);
        this.routeur.navigateByUrl("/admin")},
     
      error:err=>{console.log(err);}
    })
  
  }

}
