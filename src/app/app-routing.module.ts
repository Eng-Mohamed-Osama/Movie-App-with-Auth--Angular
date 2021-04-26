import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [{path : '' , component : MoviesComponent},
{path: 'login' , component: LoginComponent},
{path: 'signup' , component: SignupComponent},
{path: 'customers' , component: CustomersComponent, canActivate:[AuthGuardGuard] },
{path:'movie/:id' , component: MovieDetailsComponent},
{path:'**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
