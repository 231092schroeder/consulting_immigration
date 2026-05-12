import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmartFormService {

  private apiUrl = 'http://localhost:3000/forms';

  constructor(private http: HttpClient) { }

  saveAnswers(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }
}
