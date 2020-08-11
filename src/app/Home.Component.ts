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

  `,
  styleUrls: [`./app.component.css`]
})
export class HomeComponent {
    title = 'testing';
  }