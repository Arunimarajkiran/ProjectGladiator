import { Component } from '@angular/core';
import { User } from "./User";
import { NgForm } from "@angular/forms";
import { ServiceService } from "src/app/service.service";

@Component({
  selector: 'app-register',
  template: `<body class="bo">
 
  <div class="row">
    <div class="main">
      <div class="card">
          
        <h2 style="text-align: center;"> Hello Where do you want to explore?</h2>
        
         <form #registerForm='ngForm' (ngSubmit)='registerAUser(registerForm)' > 
          <table align="center">
          
            <div class="containera">
              <label for="uname"><b>First Name</b></label>
              <input type="text" placeholder="Enter First Name" name="uname" [(ngModel)]='user.firstName' required >

              <label for="lname"><b>Last Name</b></label>
              <input type="text" placeholder="Enter Last Name" name="lname" [(ngModel)]='user.lastName' required >

              <label for="email"><b>Email Address</b></label>
              <input type="email" placeholder="Enter Email Address" name="email" pattern=".+@lntinfotech.com" [(ngModel)]='user.email' required>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="pass" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$"
              title="Must contain at least one special character,one number,one uppercase and lowercase letter, and at least 8 or more characters"
              [(ngModel)]='user.password' required >

              <label for="psw"><b>Confirm Password</b></label>
              <input type="password" placeholder="Enter Password again" name="pass" 
              [(ngModel)]='user.confirmPassword' required >
              
              <label for="date"><b>Date of Birth</b></label> <br>
              <input type="date" name="date" [(ngModel)]='user.dateOfBirth' required ><br><br>
          
              <label for="mobile"><b>Mobile No.</b></label>
              <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]*" name="mobile" minlength="10" maxlength="10" 
              title="Must contain exactly 10 digits" [(ngModel)]='user.mobileNumber'
              required >
              
  
              <button type="submit">Register</button>
              <button type="button" class="cancelbtn">Cancel</button>
            </div>
          </table>
          </form>
          
    </div>
    </div>
   </div>
   <h1>{{status?.message}}</h1>
  
   </body>

`,
styleUrls: [`./app.component.css`]
})
export class RegisterComponent {
    title = 'testing';
    status ;

    user=new User;
    constructor(private service :ServiceService) { }

    registerAUser(form :NgForm){
      alert(JSON.stringify(this.user));
    this.service.registerAUser(this.user).subscribe(
      data=>{
        alert(JSON.stringify(data));
        this.status=data;
        
      }
    )
    }

    
  }