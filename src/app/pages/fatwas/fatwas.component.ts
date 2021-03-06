import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/core/service/common/common.service';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-fatwas',
  templateUrl: './fatwas.component.html',
  styleUrls: ['./fatwas.component.scss'],
  providers: [QuestionService],
})
export class FatwasComponent implements OnInit, OnChanges {
  constructor(
    private commonService: CommonService,
    private questionServices: QuestionService,
    private titlePage: Title
  ) {}
  @Input() isHome = false;

  ngOnInit(): void {
    this.titlePage.setTitle('Darulifta Fatwas ');
    this.getCategoryList();
    this.getMadhabList();
    this.getQuestion('?status=8&&field=createdAt&orderBy=DESC');
    this.getGeneralDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  categoryList: any = [];
  subCategoryList: any = [];
  madhabList: any = [];
  questionList: any = [];
  selectedCat: any;
  questionsList: any;
  languageId: number = 0;
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
      params =
        this.languageId > 0
          ? `?language=${this.languageId}&sub_category=${data.id}&status=8`
          : `?sub_category=${data.id}&status=10`;
      this.getQuestion(params);
    }
    if (type === 'mad') {
      params =
        this.languageId > 0
          ? `?language=${this.languageId}&madhab=${data.id}&status=8`
          : `?madhab=${data.id}&status=8`;
      this.getQuestion(params);
    } else if (type === 'tab') {
      this.languageId = data.id;
      console.log('Tabs', data);
      if (this.languageId > 0) {
        params = `?language=${data.id}&status=8`;
      } else {
        params = `?status=8`;
      }
      this.getQuestion(params);
    }
  }
}
