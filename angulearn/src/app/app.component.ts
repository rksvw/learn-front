import { Component } from '@angular/core';
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LoginComponent]
})
export class AppComponent {
  title = 'Angular app';
}
