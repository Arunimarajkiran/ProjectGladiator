import { Component } from '@angular/core';

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
                        <form id="loginForm" method="post" action="LoginServlet">
                            <div class="containerb">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" title="username should be more than 5 characters"
                                    placeholder="Enter Username" id="uname" name="uname" />
                                <span id="userSpan" style="color: red;"></span><br />

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" id="psw" />
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
  }