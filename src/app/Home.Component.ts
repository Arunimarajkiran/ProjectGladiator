import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="bg-img">
  <form class="container">
    <h1>Find flights</h1>
    <div>
    <input type="radio" checked="checked" id="round" name="trip" value="round">
    <label for="round">Round Trip</label>
    <input type="radio" id="one-way" name="trip" value="one-way">
    <label for="one-way">One Way</label><br/><br/>
    </div>

    <div class="flight">
    <label for="from"><b>FROM</b></label><br/>
    <input type="text" placeholder="From" name="from" id="from" required>
    </div>
    <div class="flight">
    <label for="to"><b>TO</b></label><br/>
    <input type="text" placeholder="To" name="to" id="to" required>
    </div><br/>
    <div class="dates">
    <label for="departure"><b>Departure</b></label>
    <input type="Date" name="departure" id="departure" required>
    </div>
    <div class="dates">
    <label for="return"><b>Return</b></label>
    <input type="Date" name="return" id="return" required>
    </div><br/><br/>
    <div class="ctz">
    <label for="adults"><b>Adult</b></label>
    <input type="number" class="adults" value="1">
    </div>
    <div class="ctz">
    <label for="children"><b>Children(2-11)</b></label>
    <input type="number" class="adults" value="0">
    </div>
    <br/><br/>
    <div class="ctz">
    <label for="class"><b>Travel Class</b></label>
    <select>
      <option value="1">Economy Class</option>
      <option value="2">Business Class</option>
    </select>
    </div>
    <button type="submit" class="btn">Search</button>
  </form>
</div>

<section class="view intro rgba-gradient">
<div class="full-bg-img">
<div>
<h2 styles="text-align: center;"> 20 Years Strong!</h2>
  <p>On April 15, 2000, R.K Sinha flew the first Indian Airlines flight – carrying<br>
  Indian mail from Mumbai, Maharashtra, to Dehradun, Uttrakhand. <br>
  After 8 years of mail routes, the airline began to form into what it is today.<br>
  Indian founder R.K. Sinha worked with Donald Douglas to create the DC-3; <br>
  a plane that changed the entire airline industry, switching revenue sources<br>
  from mail to passengers.<br>
  </p>
</div>
</div>
</section>
<div class="rgba-gradient">
<section class="intro-1">
<div style="text-align: right;">
<h2>We are returning to the sky!</h2>
<p>

We are returning to the sky. As of June, we are <br>
pleased to welcome you to safe travels on an <br>
expanded number of domestic flights. Our objective<br>
is to keep you safe throughout your trip with a <br>
socially distant, contactless and hygienic travel <br>
experience. We provide extra flexible rights for <br>
tickets, to accommodate changes in your travel <br>
schedule. You can begin planning new trips<br>
by reviewing our expanded flight plan.
</p>
</div>
</section>
</div>
<div>
<section class="intro-2">
<div style="text-align: left;">
<h2>Feel relaxed while traveling in India!</h2>
<p>
Secure yourself and your loved ones with Tourist Protection and Support<br>
Insurance, offering Covid-19 coverage, and enjoy your holiday in India.
</p>
</div>
</section>
</div>
  `,
  styleUrls: [`./app.component.css`]
})
export class HomeComponent {
    title = 'testing';
  }