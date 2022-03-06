import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnswersService {
  constructor(private http: HttpClient) {}

  getAnswers(id: number) {
    return this.http.get(`/answers?question_id=${id}`);
  }
}
