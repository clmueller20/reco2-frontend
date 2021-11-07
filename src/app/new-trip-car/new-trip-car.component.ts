import { TripManager } from './../trip-manager';
import { Component, OnInit } from '@angular/core';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
 }
@Component({
  selector: 'app-new-trip-car',
  templateUrl: './new-trip-car.component.html',
  styleUrls: ['./new-trip-car.component.css','../login/login.component.css']
})
export class NewTripCarComponent implements OnInit {


constructor(private tripman: TripManager, private http:HttpClient, private sanitizer: DomSanitizer) { }


ftransportname ='';
fconsumption ='';
fstart ='';
fend ='';
flength ='';
flengthfinal = 0;
fsave = false;
fdate ='';
femissions =''; 
fdescription =''; 
femissionFactor =''; 
ffuel ='';
murlstart!: SafeResourceUrl;
murlend!: SafeResourceUrl;  
checked= '';


ftemp1show =false;
ftemp2show =false;
fmapsshow= false;

ftname ='';

getfuel(nr: string){
  if(nr == '1'){
    this.ffuel = 'Petrol';
    this.femissionFactor = '3.29941';
  }
  if(nr == '2'){
    this.ffuel = 'Diesel';
    this.femissionFactor = '3.51075';
  }
  if(nr == '3'){
    this.ffuel = 'LPG';
    this.femissionFactor = '1.88662';
  }
  if(nr == '4'){
    this.ffuel = 'Electricity';
    this.femissionFactor = '0.38';
  }
}

fTempShow(number: string){
  if(number == '1'){
    this.ftemp1show = true;
    this.ftemp2show = false;
    this.ftname ='Car:';
    this.getfuel('1');
  }
  if(number == '2'){
    this.ftemp1show = true;
    this.ftemp2show = true;
    this.ftname ='Ecar:';
    this.getfuel('4');
  }
  if(number == '3'){
    this.ftemp1show = true;
    this.ftemp2show = false;
    this.ftname ='Bus:';
    this.getfuel('1');
  }

}


addTripCarDB(): void{
  
  let cartrip = {
    description: this.fdescription,
    route:{
       start:this.fstart,
       end:this.fend,
       length:this.flengthfinal},
    car:{
       name: this.ftransportname,
       consumption: this.fconsumption,
       fuel:{
          name:this.ffuel,
          emissionFactor:this.femissionFactor,
           unit:"Liter" }
        },
      emissions: this.femissions,
      date: this.fdate
 };
  this.tripman.addTripCar(cartrip);
  }

  sendTrip(){
    if(this.ftname =='Car:'){
    this.addTripCarDB();
  }
  if(this.ftname =='Ecar:'){
   this.addTripECarDB();
  }
  if(this.ftname =='Bus:'){
    this.addTripBusDB()
  }
  }

  addTripECarDB(): void{
    
    let ecartrip = {
      description: this.fdescription,
      route:{
         start:this.fstart,
         end:this.fend,
         length:this.flengthfinal },
      ecar:{
         name: this.ftransportname,
         consumption: this.fconsumption,
  
         fuel:{
            name:this.ffuel,
            emissionFactor:this.femissionFactor,
             unit:"kwh" }
      },
      emissions: this.femissions,
      date: this.fdate
    };
    this.tripman.addTripECar(ecartrip);
    }

    addTripBusDB(): void{
     
      let bustrip = {
        description: this.fdescription,
        route:{
           start:this.fstart,
           end:this.fend,
           length:this.flengthfinal },
        bus:{
           name: this.ftransportname,
           consumption: this.fconsumption,
    
           fuel:{
              name:this.ffuel,
              emissionFactor:this.femissionFactor,
               unit:"Liter" }
     },
        emissions: this.femissions,
        date: this.fdate
     };
      this.tripman.addTripBus(bustrip);
      }
  

      getData() {
        return this.http.get<Route>('https://maps.distancematrixapi.com/maps/api/distancematrix/json?origins='+ this.fstart +'&destinations='+ this.fend +'_time=now&key=AlphaDMA1vgnzQC4Wk1TRbqjZkjuEq48cNLuARG2');
        }
        ngOnInit() {}

        getLength(){ 
          if(this.fstart != '' && this.fend != ''){ 
          this.getData().subscribe(
          route => { console.log(route); this.flength = route.rows[0].elements[0].distance.text; this.checkedWays(); console.log(this.flength);console.log(this.flengthfinal);},
          err =>console.log(err),  
          () => console.log('loading done.')
          );
          this.murlstart = this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + this.fstart + "&output=embed");
          this.murlend = this.sanitizer.bypassSecurityTrustResourceUrl("https://maps.google.com/maps?q=" + this.fend + "&output=embed"); 
          this.fmapsshow = true;
          this.fsave = true;
         }
        }

         delay(ms: number) {
          return new Promise( resolve => setTimeout(resolve, ms) );
      }

         checkedWays(){
           if(this.checked == '2'){
            this.flengthfinal = parseFloat(this.flength) * 2;
           }if(this.checked == '1'){
            this.flengthfinal = parseFloat(this.flength);
           }console.log(this.flengthfinal);
         }
     
      btnBerechnen(){
           this.addCalculateDB();   
      }
        
         
       
  
       
      
         
      postEmission(postcalc: Object) {
        if(this.ftname =='Car:'){
            let endPoint = "https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/car/calculate";
            this.http.post<emDB>(endPoint, postcalc).subscribe(date => { this.femissions = date.emission;
              console.log(date.emission);
           });
        }
        if(this.ftname =='Ecar:'){
          let endPoint = "https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/ecar/calculate";
          this.http.post<emDB>(endPoint, postcalc).subscribe(date => { this.femissions = date.emission;
            console.log(date.emission);
         });
      }
      if(this.ftname =='Bus:'){
        let endPoint = "https://rocky-woodland-01898.herokuapp.com/api/v1.0/trip/bus/calculate";
        this.http.post<emDB>(endPoint, postcalc).subscribe(date => { this.femissions = date.emission;
          console.log(date.emission);
       });
    }
        }

        addCalculateDB(): void{
          this.checkedWays();
          if(this.ftname =='Car:'){
          
          let carcalc = {
              car:{
                name:this.ftransportname,
                consumption:this.fconsumption,
                fuel:{
                   name:this.ffuel,
                   emissionFactor:this.femissionFactor,
                   unit:"Liter"
                }
             },
             distance: this.flengthfinal
         };
          this.postEmission(carcalc);
          };
       
        if(this.ftname =='Bus:'){
         
          let buscalc = {
            bus:{
              name:this.ftransportname,
              consumption:this.fconsumption,
              fuel:{
                 name:this.ffuel,
                 emissionFactor:this.femissionFactor,
                 unit:"Liter"
              }
           },
           distance: this.flengthfinal
       };
         this.postEmission(buscalc);
          }
          if(this.ftname =='Ecar:'){
          
          let ecarcalc = {
            ecar:{
              name:this.ftransportname,
              consumption:this.fconsumption,
              fuel:{
                 name:this.ffuel,
                 emissionFactor:this.femissionFactor,
                 unit:"Liter"
              }
           },
           distance: this.flengthfinal
       };
         this.postEmission(ecarcalc);
          }
        } 
                  
}

interface emDB {
emission: string;
}

interface Route {
  destination_adresses: string,
  origin_adresses: string,
  rows: [
    {
    elements:[
      {
      distance: {
        text: any,
        value: any
      },
      duration: {
        text: any,
        value: any
      },
      status: string
  }
]
,
  }
]
  ,
  status: string
}