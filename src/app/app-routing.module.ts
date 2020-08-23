import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./Home.Component";
import { RegisterComponent } from "./Register.Component";
import { PlanComponent } from "./Plan.Component";
import { ClassesComponent } from "./Classes.Component";
import { DiscoverComponent } from "./Discover.Component";
import { LoginComponent } from "./Login.Component";
import { DashboardComponent } from "../app/dashboard/dashboard.component";
//import { BookingComponent } from "./Booking.component";

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path:'homelink',component:HomeComponent
  },
  {
    path:'plan&booklink',component:PlanComponent
  },
  {
    path:'classeslink',component:ClassesComponent
  },
  {
    path:'discoverlink',component:DiscoverComponent
  },
  {
    path:'registerlink',component:RegisterComponent
  },
  {
    path:'loginlink',component:LoginComponent
  },
  {
    path:'dashboardlink',component:DashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
