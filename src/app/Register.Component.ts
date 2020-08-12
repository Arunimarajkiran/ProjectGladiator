import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  template: `<body class="bo">
 
  <div class="row">
    <div class="main">
      <div class="card">
          
        <h2 style="text-align: center;"> Hello Where do you want to explore?</h2>
        
         <form > 
          <table align="center">
          
            <div class="containera">
              <label for="uname"><b>First Name</b></label>
              <input type="text" placeholder="Enter First Name" name="uname" required ngModel>

              <label for="uname"><b>Last Name</b></label>
              <input type="text" placeholder="Enter Last Name" name="uname" required ngModel>

              <label for="email"><b>Email Address</b></label>
              <input type="email" placeholder="Enter Email Address" name="email" pattern=".+@gmail.com" required ngModel>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[$,@,!]).{8,}$"
              
               required ngModel>

              <label for="psw"><b>Confirm Password</b></label>
              <input type="password" placeholder="Enter Password again" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[$,@,!]).{8,}$"
              
               required ngModel>
              
              <label for="date"><b>Date of Birth</b></label> <br>
              <input type="date" name="date" required ngModel><br><br>
          
              <label for="mobile"><b>Mobile No.</b></label>
              <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]*" name="mobile" minlength="10" maxlength="10" 
              required ngModel>
              
  
              <button type="submit">Register</button>
              <button type="button" class="cancelbtn">Cancel</button>
            </div>
          </table>
          </form>
          
    </div>
    </div>
   </div>
  
   </body>

`,
styleUrls: [`./app.component.css`]
})
export class RegisterComponent {
    title = 'testing';

    
  }