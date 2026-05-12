import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmartFormComponent } from "./pages/smart-form/smart-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmartFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'consulting';
}
