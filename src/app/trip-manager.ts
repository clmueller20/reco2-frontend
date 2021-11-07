import { AccManager } from './acc-manager';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
   }
   @Injectable()
   export class TripManager {
    constructor(private http:HttpClient, public accm: AccManager) {}
    
    
    addTripCar(postTrip: Object) {
    let endPoint = 'https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/car/' + this.accm.getUserToken();
    this.http.post<feedbackDB>(endPoint, postTrip).subscribe(data => {
       console.log(data.feedback ); alert(data.feedback);
    });
    }

    addTripECar(postTrip: Object) {
      let endPoint = 'https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/ecar/' + this.accm.getUserToken();
      this.http.post<feedbackDB>(endPoint, postTrip).subscribe(data => {
         console.log(data.feedback);alert(data.feedback);
      });
      }

      addTripBus(postTrip: Object) {
         let endPoint = 'https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/bus/' + this.accm.getUserToken();
         this.http.post<feedbackDB>(endPoint, postTrip).subscribe(data => {
            console.log(data.feedback);alert(data.feedback);
         });
         }
   
   
   }

   interface feedbackDB{
      feedback: string;
   }