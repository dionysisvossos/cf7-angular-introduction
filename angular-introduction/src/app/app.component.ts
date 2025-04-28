import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Dennis';

  // Step 1: one way data binding
  // person = {
  //   givenName: 'Dennis',
  //   surName: 'Vossos',
  //   age: 41,
  //   email: 'dionysis.vossos@aueb.gr'
  };

  // Step 3: Component interaction
  // person0: Person = {
  //   givenName: 'John',
  //   surName: 'Doe',
  //   age: 30,
  //   email: 'j.doe@example.com',
  //   address: '123 Main St, Cityville, Country'
  // };

  // person1: Person = {
  //   givenName: 'Jane',
  //   surName: 'Smith',
  //   age: 25,
  //   email: 'janesmith@example.com',
  //   address: '456 Elm St, Townsville, Country'
  // };

  
  
