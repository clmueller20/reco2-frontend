import { TripManager } from './trip-manager';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { AccManager } from './acc-manager';
import { HttpClientModule } from '@angular/common/http';
import { NewTripCarComponent } from './new-trip-car/new-trip-car.component';
import { SelectInputScreenComponent } from './select-input-screen/select-input-screen.component';
import { ShowKontoComponent } from './show-konto/show-konto.component';
import { ShowTripsComponent } from './show-trips/show-trips.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    NewAccComponent,
    NewTripCarComponent,
    SelectInputScreenComponent,
    ShowKontoComponent,
    ShowTripsComponent,
  ],

  imports: [
    MatTableModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'newAccount', component: NewAccComponent},
      { path: 'newTripCar', component: NewTripCarComponent},
      { path: 'selectInputScreen', component: SelectInputScreenComponent},
      { path: 'showKonto', component: ShowKontoComponent},
      { path: 'showTrips', component: ShowTripsComponent}
    ])
  ],
  providers: [AccManager,TripManager, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
