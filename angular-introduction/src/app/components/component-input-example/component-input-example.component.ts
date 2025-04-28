import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-component-input-example',
  imports: [],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 30,
    email: 'j.doe@example.com',
    address: '123 Main St, Cityville, Country'
  }

  person1: Person = {
    givenName: 'Jane',
    surName: 'Smith',
    age: 25,
    email: 'janesmith@example.edu',
    address: '456 Elm St, Townsville, Country'
  }
}
