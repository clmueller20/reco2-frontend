import { AccManager } from './../acc-manager';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-konto',
  templateUrl: './show-konto.component.html',
  styleUrls: ['./show-konto.component.css']
})
export class ShowKontoComponent implements OnInit {

  constructor(private http:HttpClient, public accm: AccManager) { }

  userlastname = '';
  userfirstname = '';
  useremail = '';

  

  ngOnInit(): void {
    console.log(this.accm.getUserToken());
    this.getUserData();
  }

    


              getData() {
                return this.http.get<userDB>('https://rocky-woodland-01898.herokuapp.com/api/v1.0/user/' + this.accm.getUserToken());
                }
        
        
                getUserData(){ 
                 
                  this.getData().subscribe(
                    ergebnis => { this.userlastname= ergebnis.user.lastName,console.log(this.userlastname);
                      this.userfirstname= ergebnis.user.firstName,
                      this.useremail= ergebnis.user.email },
                  err =>console.log(err),  
                  () => console.log('loading done.')
                  );}
}
interface userDB {
  user:{
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}
};