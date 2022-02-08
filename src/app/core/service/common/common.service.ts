import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getCategoryList() {
    return this.http.get('/category');
  }
  getSubCategoryList() {
    return this.http.get('/subcategories');
  }
}
