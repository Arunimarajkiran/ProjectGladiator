import { Component } from '@angular/core';
import { Login } from "./Login";
import { ServiceService } from "./service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template:`
  <body
    style="background: -webkit-radial-gradient(rgb(136, 15, 159), rgb(6, 19, 31));  background: radial-gradient(rgb(136, 15, 159), rgb(6, 19, 31)); background:url('./assets/sign.jpg');height:100%; min-height:100%;margin:0;padding:0;">
    <div class="row">
        <div class="main">
            <div class="card">
                <div class="form-box" style='margin-bottom: 10%;'>
                    <div class="form-top">
                        
                            <h3>Welcome to AirFuselage</h3>
                            <p>Enter username and password to log in:</p>
                        
                        <div class="form-top-right">
                            <i class="fa fa-lock"></i>
                        </div>
                    </div>
                    <div class="form-bottom" style="color:white;">
                        <form (ngSubmit)="loginCustomer()" method="POST">
                            <div class="containerb">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" [(ngModel)] = login.email  />
                                <span id="userSpan" style="color: red;"></span><br />

                                <label for="psw"><b>Password</b></label>
                                <input type="text" placeholder="Enter Password" name="psw" [(ngModel)] = login.password />
                                <span id="pswSpan" style="color: red;"></span><br />
                                <button class="buttonb" type="submit">Login</button>
                                <label>
                                    <input type="checkbox" checked="checked" name="remember" /> Remember
                                    me
                                </label>
                            </div>

                            <div class="container1">
                                <button type="button" class="cancelbtnb">Cancel</button>
                                <span class="psw"> <a href="#">Forgot password?</a></span>
                            </div>
                        </form>
                        <h2>{{ status?.message }}</h2>
                        <h2>{{ status?.userId }}</h2>
                        <h2>{{ status?.userName }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

  `,
  styleUrls: [`./app.component.css`]
})
export class LoginComponent {
    title = 'testing';

    login : Login=new Login();
    message : String;
    status ;

    constructor(private service: ServiceService, private router: Router) {}

    loginCustomer() {
        this.service.loginCustomer(this.login).subscribe(data=>{
            alert(JSON.stringify(data));
            if(data.status=='SUCCESS') {
                let userId=data.userId;
                let userName=data.name;

                sessionStorage.setItem('userId',String(userId));
                sessionStorage.setItem('userName',userName);
                this.router.navigate(['homelink']);
            }
            else {
                this.message=data.message;
            }
        })
    }

}