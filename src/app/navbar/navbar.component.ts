import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccManager } from '../acc-manager';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(public accmanager: AccManager) { 
 
  }

  public checkToken(){
    if( this.accmanager.getUserToken() != ''){
      return true;
    }
    return false; 
  }

  logoutToken(){
    this.accmanager.logOut();
  }
  

  ngOnInit(): void {
   
  }

}
