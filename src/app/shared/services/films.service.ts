import { Observable } from 'rxjs/Rx';
import { Film } from './../model/film.model';
import { Http } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService extends BaseApiService {
  private static readonly ITEMS_API = `${BaseApiService.BASE_API}/items`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Film>> {
    return this.http
      .get(FilmsService.ITEMS_API, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }
  get(id: string): Observable<Film> {
    return this.http.get(`${FilmsService.ITEMS_API}/${id}`, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(error => this.handleError(error));
  }
  create(film: Film): Observable<Film> {
      return this.http.post(FilmsService.ITEMS_API, JSON.stringify(film), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }
  addFilmFavorite(id: string): Observable<Object>{
    return this.http.put(`${FilmsService.ITEMS_API}/fav`, JSON.stringify({ id }), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  favlist(): Observable<Array<Film>> {
    return this.http.get(`${FilmsService.ITEMS_API}/favs`,BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }


}
