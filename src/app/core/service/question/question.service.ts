import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getQuestionItem(parms?: any) {
    if (parms) return this.http.get(`/questions${parms}`);
    else return this.http.get(`/questions`);
  }

  postQuestionItem(body: any) {
    return this.http.post('/questions', body);
  }
}
