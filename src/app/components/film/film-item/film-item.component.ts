import { FilmsService } from './../../../shared/services/films.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../../../shared/model/film.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  film: Film = new Film();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private FilmsService: FilmsService) { }

  ngOnInit() {
    this.routes
      .params
      .subscribe(params => {
        this.FilmsService.get(params['id'])
          .subscribe(
            (film) => { this.film = film; },
            (error) => {  this.error = error; }
          );
      });
  }

  addToFavorites(id) {
    this.FilmsService.addFilmFavorite(id)
      .subscribe(
        (updateUser) =>{
          console.log(updateUser);
        }
      )
  }

}
