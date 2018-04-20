import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { routes } from './app.routes';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { SessionService } from './shared/services/session.service';
import { FilmsService } from './shared/services/films.service';
import { UsersService } from './shared/services/users.service';
import { BaseApiService } from './shared/services/base-api.service';
import './rxjs.operators';
import { FilmItemComponent } from './components/film/film-item/film-item.component';
import { FilterPipe } from './filter.pipe';
import { FilmCreateComponent } from './components/film/film-create/film-create.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { FilmComponent } from './src/app/components/film/film.component';
import { FilmFavoriteComponent } from './components/film/film-favorite/film-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmListComponent,
    SignupComponent,
    LoginComponent,
    FilmItemComponent,
    FilterPipe,
    FilmCreateComponent,
    FilmComponent,
    FilmFavoriteComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SessionService,
    UsersService,
    BaseApiService,
    FilmsService,
    IsAuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
