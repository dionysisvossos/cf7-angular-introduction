import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = 
  [{
    "givenName": "Marie",
    "surName": "Murray",
    "email": "mmurray0@dailymail.co.uk",
    "age": 65,
    "address": "047 Susan Road"
  }, {
    "givenName": "Ania",
    "surName": "Scherme",
    "email": "ascherme1@wikispaces.com",
    "age": 44,
    "address": "01511 David Center"
  }, {
    "givenName": "Dina",
    "surName": "Wrixon",
    "email": "dwrixon2@ca.gov",
    "age": 25,
    "address": "8 Carberry Street"
  }, {
    "givenName": "Engelbert",
    "surName": "Saur",
    "email": "esaur3@patch.com",
    "age": 29,
    "address": "04285 Tennessee Trail"
  }, {
    "givenName": "Thaddus",
    "surName": "Hearnshaw",
    "email": "thearnshaw4@netscape.com",
    "age": 56,
    "address": "11 Waxwing Avenue"
  }, {
    "givenName": "Merrile",
    "surName": "Ciccottini",
    "email": "mciccottini5@behance.net",
    "age": 19,
    "address": "17464 Roxbury Drive"
  }, {
    "givenName": "Brooks",
    "surName": "Pedrozzi",
    "email": "bpedrozzi6@altervista.org",
    "age": 58,
    "address": "9 La Follette Pass"
  }, {
    "givenName": "Kristi",
    "surName": "Burnhard",
    "email": "kburnhard7@webnode.com",
    "age": 34,
    "address": "6 Canary Place"
  }, {
    "givenName": "Pamelina",
    "surName": "Coleman",
    "email": "pcoleman8@nih.gov",
    "age": 40,
    "address": "1 Hollow Ridge Circle"
  }, {
    "givenName": "Genevra",
    "surName": "Willgoose",
    "email": "gwillgoose9@senate.gov",
    "age": 40,
    "address": "41571 Mcguire Alley"
  }, {
    "givenName": "Athena",
    "surName": "Dodsworth",
    "email": "adodswortha@e-recht24.de",
    "age": 72,
    "address": "2436 Maple Alley"
  }, {
    "givenName": "Cal",
    "surName": "Cannan",
    "email": "ccannanb@umich.edu",
    "age": 62,
    "address": "81424 Charing Cross Pass"
  }, {
    "givenName": "Maris",
    "surName": "Moodie",
    "email": "mmoodiec@msn.com",
    "age": 32,
    "address": "15 Park Meadow Plaza"
  }, {
    "givenName": "Humfried",
    "surName": "Hellicar",
    "email": "hhellicard@umn.edu",
    "age": 40,
    "address": "8 Hauk Drive"
  }, {
    "givenName": "Joanne",
    "surName": "Montrose",
    "email": "jmontrosee@webeden.co.uk",
    "age": 32,
    "address": "3 Truax Junction"
  }, {
    "givenName": "Cairistiona",
    "surName": "Praten",
    "email": "cpratenf@bravesites.com",
    "age": 59,
    "address": "625 Hayes Crossing"
  }, {
    "givenName": "Karin",
    "surName": "Davydochkin",
    "email": "kdavydochking@ft.com",
    "age": 20,
    "address": "00054 Pleasure Alley"
  }, {
    "givenName": "Cordula",
    "surName": "Biddwell",
    "email": "cbiddwellh@zdnet.com",
    "age": 36,
    "address": "1 West Crossing"
  }, {
    "givenName": "Dawna",
    "surName": "Heild",
    "email": "dheildi@opensource.org",
    "age": 65,
    "address": "9 Green Avenue"
  }, {
    "givenName": "Turner",
    "surName": "Reay",
    "email": "treayj@networkadvertising.org",
    "age": 33,
    "address": "5 Sundown Point"
  }]
}
