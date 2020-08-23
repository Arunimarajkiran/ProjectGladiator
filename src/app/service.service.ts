import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./User";
import { Login } from './Login';
import { Observable } from 'rxjs';
import { LoginStatus } from "./LoginStatus";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  registerAUser(user: User){
    var url="http://localhost:9090/register";
    return this.http.post(url,user);
  }

  loginCustomer(login: Login):Observable<LoginStatus>{
    var url="http://localhost:8080/login";
    return this.http.post<LoginStatus>(url,login);

  }
}
