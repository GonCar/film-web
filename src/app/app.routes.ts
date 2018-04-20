import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { FilmItemComponent} from './components/film/film-item/film-item.component';
import { FilmCreateComponent} from './components/film/film-create/film-create.component';
import { FilmFavoriteComponent} from './components/film/film-favorite/film-favorite.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'films', pathMatch: 'full'},
    { path: 'films', component: FilmListComponent},
    { path: 'films/:id', component: FilmItemComponent},
    { path: 'create', canActivate: [IsAuthenticatedGuard], component: FilmCreateComponent},
    { path: 'favorite', component: FilmFavoriteComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
