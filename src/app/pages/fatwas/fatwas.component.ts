import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/common/common.service';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-fatwas',
  templateUrl: './fatwas.component.html',
  styleUrls: ['./fatwas.component.scss'],
})
export class FatwasComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private questionServices: QuestionService
  ) {}
  @Input() isHome = false;

  ngOnInit(): void {
    this.getCategoryList();
    this.getMadhabList();
    let parms = '?language=1&&status=8';
    this.getQuestion(parms);
    this.getGeneralDetails();
  }

  categoryList: any = [];
  subCategoryList: any = [];
  madhabList: any = [];
  questionList: any = [];
  selectedCat: any;
  questionsList: any;
  languageId: number = 1;
  generalDetails: any = {};

  getGeneralDetails() {
    this.commonService.getGeneralDetails().subscribe((res) => {
      this.generalDetails = res;
    });
  }

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
      params = `?language=${this.languageId}&&sub_category=${data.id}&&status=8`;
      this.getQuestion(params);
    }
    if (type === 'mad') {
      params = `?language=${this.languageId}&&madhab=${data.id}&&status=8`;
      this.getQuestion(params);
    } else if (type === 'tab') {
      this.languageId = data.id;
      params = `?language=${data.id}&&status=8`;
      this.getQuestion(params);
    }
  }
}
