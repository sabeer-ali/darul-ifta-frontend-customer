import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/service/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.getCategoryList();
  }

  categoryList: any = [];
  subCategoryList: any = [];

  getCategoryList() {
    this.commonService.getCategoryList().subscribe((res) => {
      this.categoryList = res;
      this.categoryList.forEach((element: any) => {
        element.subCat = [];
      });
      this.getSubCategoryList();
    });
  }
  getSubCategoryList() {
    this.commonService.getSubCategoryList().subscribe((res) => {
      this.subCategoryList = res;
      this.categoryList.forEach((el: any) => {
        this.subCategoryList.map((item: any) => {
          if (el.id === item.category_id) {
            el.subCat.push(item);
          }
        });
      });
    });
  }
}
