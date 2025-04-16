import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Dionysis';

  person = {
    givenName: 'Dennis',
    surName: 'Vossos',
    age: 41,
    email: 'dionysis.vossos@aueb.gr'
  };

}
