import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { AccManager } from '../acc-manager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public accmanager: AccManager, public nav: NavbarComponent) { }

  ngOnInit(): void {
  }
  useremail= '';
  userpassword= '';


  loginstatus='';
  sendUserDB(): void{
   if(this.useremail == '' || this.userpassword == ''){
    alert('Please fill in all login data!');
   }else{
      let user = {
      email: this.useremail,
      password: this.userpassword
    };
      this.accmanager.sendUser(user);
     this.nav.checkToken();
    }
   }
   

   

}


