import { OmdbApiService } from './omdb-api.service';
import { Component } from '@angular/core';
import { IOMDBResponse } from './iomdbresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  movieData: IOMDBResponse;
  errorMessage:string;
  imageHeight = 300;

  constructor(private _omdbService: OmdbApiService) {

  }

  getMovieDetails(movieName: string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(movieData => {
      this.movieData = movieData;
      console.log('getMovieDetails: ' + this.movieData);
    },
      error => this.errorMessage = <any>error);
    return false;   
  }
}
