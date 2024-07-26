import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as figlet from 'figlet';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FigletServieService {
  private apiUrl = 'http://localhost:3000/stylize';

  constructor(private http: HttpClient) { }

  stylizeText(text: string): Observable<string> {
    return this.http.post(this.apiUrl, { text }, { responseType: 'text' });
  }
}
