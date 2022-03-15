import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { CommonService } from 'src/app/core/service/common/common.service';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private questionServices: QuestionService,
    private titlePage: Title
  ) {}

  ngOnInit(): void {
    this.titlePage.setTitle('Home - Darulifta kauzariyya');
    this.getCategoryList();
    this.getMadhabList();
    let parms = '?language=1';
    this.getQuestion(parms);
  }

  categoryList: any = [];
  subCategoryList: any = [];
  madhabList: any = [];
  questionList: any = [];
  selectedCat: any;
  questionsList: any;
  languageId: number = 1;

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

  getMadhabList() {
    this.commonService.getMadhabList().subscribe((res) => {
      this.madhabList = res;
    });
  }

  getQuestion(parms?: any) {
    this.questionServices.getQuestionItem(parms).subscribe((res) => {
      this.questionsList = res;
    });
  }

  onSelectTab(data: any, type: string) {
    let params;
    if (type === 'cat') {
      params = `?language=${this.languageId}&&sub_category=${data.id}`;
      this.getQuestion(params);
    }
    if (type === 'mad') {
      params = `?language=${this.languageId}&&madhab=${data.id}`;
      this.getQuestion(params);
    } else if (type === 'tab') {
      this.languageId = data.id;
      params = `?language=${data.id}`;
      this.getQuestion(params);
    }
  }
}
