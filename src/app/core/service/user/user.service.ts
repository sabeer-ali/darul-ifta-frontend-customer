import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getQuestionItem(parms: any) {
    return this.http.get(`/questions?${parms}`);
  }

  postQuestionItem(body: any) {
    return this.http.post('/questions', body);
  }
}
