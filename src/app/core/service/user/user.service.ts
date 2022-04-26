import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Login {
  data: any;
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  postLogin(body: any) {
    return this.http.post<Login>(`/user/login`, body);
  }

  getEmailValidate(params: any) {
    return this.http.get<Login>(`/user/checkMail${params}`);
  }

  postUserGoogleAuth(body: any) {
    return this.http.post('/user/authGoogle', body);
  }

  getQuestionItem(parms: any) {
    return this.http.get(`/questions?${parms}`);
  }

  postQuestionItem(body: any) {
    return this.http.post('/questions', body);
  }
}
