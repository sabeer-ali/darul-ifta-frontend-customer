import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

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
}
