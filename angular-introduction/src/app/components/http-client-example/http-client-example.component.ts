import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {

  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    // this.jokesService.getDadJokes().subscribe((joke) => {
    //   console.log('Dad Joke:', joke.joke);
    // });

    // this.jokesService.getChuckNorrisJokes().subscribe((joke) => {
    //   console.log('Chuck Norris Joke:', joke.value);
    // });
    this.refreshDadJoke();
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke() {
    this.jokesService.getDadJokes().subscribe((joke) => {
      console.log('Dad Joke:', joke.joke);
      this.dadJoke = joke.joke;
    });
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJokes().subscribe((joke) => {
      console.log('Chuck Norris Joke:', joke.value);
      this.chuckNorrisJoke = joke.value;
    });
  }

}
