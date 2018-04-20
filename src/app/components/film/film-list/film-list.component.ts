import { Component, OnInit } from '@angular/core';
import { Film } from  '../../../shared/model/film.model';
import { FilmsService } from '../../../shared/services/films.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Array<Film> = [];
  filterArgs: Object = {}

  constructor(private filmsService: FilmsService) { }

  

  ngOnInit() {
    this.filmsService
      .list()
      .subscribe(films => {
        this.films = films;
      })
  }

}
