import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Dennis';

  person = {
    givenName: 'Dennis',
    surName: 'Vossos',
    age: 41,
    email: 'dionysis.vossos@aueb.gr'
  };
}
