import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CustomersComponent } from './customers/customers.component';
import { RatingModule } from 'ng-starrating';
import { AuthModule } from './auth/auth.module';
import { LanguagePipe } from './language.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    CustomersComponent,
    LanguagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    AuthModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
