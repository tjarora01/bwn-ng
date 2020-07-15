import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  componentTitle = "I am app component from app.component.tx";

  clickHandler() {
  	alert("I AM CLICKED");
  }
}
