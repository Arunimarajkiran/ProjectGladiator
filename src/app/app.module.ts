import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./Home.Component";
import { PlanComponent } from "./Plan.Component";
import { ClassesComponent } from "./Classes.Component";
import { DiscoverComponent } from "./Discover.Component";
import { RegisterComponent } from "./Register.Component";
import { LoginComponent } from "./Login.Component";
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanComponent,
    ClassesComponent,
    DiscoverComponent,
    RegisterComponent,
    LoginComponent,
    PaymentComponent
    //BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
