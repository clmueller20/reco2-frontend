import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json'
 })
}
@Injectable()
export class AccManager {
 constructor(private http:HttpClient) {}

 private usertoken='';

 public setUserToken(data: string){
    this.usertoken = data;
  }

  public getUserToken(){
    return this.usertoken;
  }

 sendUser(postUser: Object) {
    let endPoint = "https://rocky-woodland-01898.herokuapp.com/api/v1.0/user/login"
    this.http.post<Ergebnis>(endPoint, postUser).subscribe(ergebnis => {
        console.log(ergebnis.token); this.setUserToken(ergebnis.token); alert(ergebnis.feedback); 
});
}

logOut() { 
   let endPoint = 'https://rocky-woodland-01898.herokuapp.com/api/v1.0/user/logoff/' + this.usertoken; 

   this.http.post(endPoint, {}).subscribe();
   console.log(endPoint);   

   this.setUserToken('');
   console.log(this.usertoken + "logoff");
}


 addAcc(postAcc: Object) {
 let endPoint = "https://rocky-woodland-01898.herokuapp.com/api/v1.0/user"
 this.http.post<Feedback>(endPoint, postAcc).subscribe(data => {
    console.log(data.feedback); alert(data.feedback);
 });
 }
 

}
interface Feedback {
   feedback: string;
 }
interface Ergebnis {
   token: string;
   feedback: string;
 }
