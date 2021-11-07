import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../login/login.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavbarComponent) { }

token = false;

  ngOnInit(): void {
    this.token = this.nav.checkToken();
  } 

  addVehicleTamplate(){
    alert('Coming soon');
  }

}
