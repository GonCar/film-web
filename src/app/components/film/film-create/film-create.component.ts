import { Component, OnInit } from '@angular/core';
import { Film } from  '../../../shared/model/film.model';
import { FilmsService } from '../../../shared/services/films.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.css']
})
export class FilmCreateComponent implements OnInit {
  film: Film = new Film();
  title: string;
  year: number;
  genres: Array<string>;
  type: Array<string>;
  actors: Array<string>;
  plot: string;
  apiError: string;

  constructor(
    private router: Router,
    private filmsService: FilmsService) { }

    onSubmitCreate(createForm) {
      this.filmsService.create(this.film).subscribe(
        (film) => {
          createForm.reset();
          this.router.navigate(['/films']);
        },
        (error) => {
          this.apiError = error.message;
        }
      );
    }
    ngOnInit() {}

    
}
