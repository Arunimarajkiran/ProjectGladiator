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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanComponent,
    ClassesComponent,
    DiscoverComponent,
    RegisterComponent,
    LoginComponent
    //BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
