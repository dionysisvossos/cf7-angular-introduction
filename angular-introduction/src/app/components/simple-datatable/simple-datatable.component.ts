import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined;
  @Output() personClicked = new EventEmitter<EPerson> ()

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  sortData(sortKey: keyof EPerson) {
    console.log('Sorting by:', sortKey);
  }

  onPersonClicked(person: EPerson) {
    console.log('Person clicked:', person);
  }
}
