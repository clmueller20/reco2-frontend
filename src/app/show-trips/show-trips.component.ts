import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AccManager } from '../acc-manager';

 

@Component({
  selector: 'app-show-trips',
  templateUrl: './show-trips.component.html',
  styleUrls: ['./show-trips.component.css']
}) 
export class ShowTripsComponent implements OnInit {

  constructor(public accm: AccManager, private http:HttpClient) { }
  
 
  listT: tripitem[] = [];
 
  ngOnInit(): void {
    this.getUserData();
  }

  getData() {
    return this.http.get<ListTrip>('https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/all/' + this.accm.getUserToken());
    }


    getUserData(){ 
     
      this.getData().subscribe(
        x => { this.listT = x.trips;   console.log( this.listT);
          this.listT.forEach(item => {
            console.log(item.number + " " + item.vehicle + " " + item.date + " " + item.emission + " " + item.description);
          });
    })
  }
}

interface ListTrip{
  trips: tripitem[]
}
interface tripitem{
  number: number,
  vehicle: string,
  emission: string,
  date: string,
  description: string
}