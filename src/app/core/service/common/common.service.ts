import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getGeneralDetails() {
    return this.http.get('/generals');
  }

  getLanguageList() {
    return this.http.get('/languages');
  }

  getMadhabList() {
    return this.http.get('/madhab');
  }

  getCategoryList() {
    return this.http.get('/category');
  }
  getSubCategoryList() {
    return this.http.get('/subcategories');
  }

  getLoginDetail() {
    let data = sessionStorage.getItem('userData');
    if (data) {
      return JSON.parse(data);
    } else null;
  }
}
