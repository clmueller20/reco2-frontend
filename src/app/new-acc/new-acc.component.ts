
import { Component, OnInit } from '@angular/core';
import { AccManager } from '../acc-manager';

@Component({
  selector: 'app-new-acc',
  templateUrl: './new-acc.component.html',
  styleUrls: ['./new-acc.component.css', '../login/login.component.css']
})
export class NewAccComponent implements OnInit {

 

  constructor(private accmanager: AccManager) { }

  ngOnInit() {}
   useremail = '';
   userfirstname = '';
   userlastname= '';
   userpassword= '';
  passwordconfirmation = '';

  addAccDB(): void{
   if(this.useremail =='' ||this.userfirstname =='' ||this.userlastname =='' ||this.userpassword =='' ||this.passwordconfirmation ==''){
      alert('Please fill in all informations!');
   }else if(this.userpassword != this.passwordconfirmation){
    alert('Please provide matching passwords!');
   }else{
      let user = {
      email: this.useremail,
      firstName: this.userfirstname,
      lastName: this.userlastname,
      password: this.userpassword
    };
    this.accmanager.addAcc(user);
    }
   }
  }

