import { Component, OnInit } from '@angular/core';
import { Film } from  '../../../shared/model/film.model';
import { User } from  '../../../shared/model/user.model';
import { FilmsService } from '../../../shared/services/films.service';

@Component({
  selector: 'app-film-favorite',
  templateUrl: './film-favorite.component.html',
  styleUrls: ['./film-favorite.component.css']
})
export class FilmFavoriteComponent implements OnInit {
  films: Array<Film> = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
      this.filmsService.favlist()
      .subscribe(films => {
        this.films = films
      });

  }

}
