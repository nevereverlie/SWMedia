import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
baseUrl = environment.apiUrl + 'film/';

constructor(private http: HttpClient) { }

GetFilms() {
  return this.http.get(this.baseUrl + 'getFilms');
}

}
