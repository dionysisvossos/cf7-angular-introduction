import { Component, Input, Output, EventEmitter, effect, inject } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { sortBy } from 'lodash-es';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined;
  @Output() personClicked = new EventEmitter<EPerson>();

  pesonService = inject(PersonService);

  epersonsData: EPerson[] | undefined = [];

  constructor() {
    effect(() => {
      if (this.pesonService.modifiedDataTable()) {
        console.log('SIGNAL', this.data)
        this.epersonsData = this.data;
      }
      this.pesonService.modifiedDataTable.set(false);
    })
  }

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none'
  }

  ngOnInit() {
    this.epersonsData = this.data;
  }
  

  sortData(sortKey: keyof EPerson): void {
    // console.log(sortKey);
    this.epersonsData = this.data;
    console.log('1>>', this.data);
    
    if (this.sortOrder[sortKey]==='asc'){
      this.sortOrder[sortKey] = 'desc'
      this.epersonsData = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.epersonsData = sortBy(this.data, sortKey);
    }
    
    for (let key in this.sortOrder){
      if (key!== sortKey) {
        this.sortOrder[key as keyof EPerson] = 'none'
      }
    }

    console.log(this.sortOrder);
  }

  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey]==='asc') return '\u2191'
    else if (this.sortOrder[sortKey]==='desc') return '\u2193'
    else return '';
  }

  onPersonClicked(person: EPerson){
    
    this.personClicked.emit(person);
    console.log("Person>>",person);
  }
}
