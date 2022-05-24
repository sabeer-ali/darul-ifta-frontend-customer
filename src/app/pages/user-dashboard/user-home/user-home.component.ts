import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private titlePage: Title
  ) {}

  dashboardDetails: any = [];

  userQuestionList: any = [];
  userId: any;

  async ngOnInit() {
    this.titlePage.setTitle('User home');
    const lData = sessionStorage.getItem('userData');
    if (lData) {
      const userData = await JSON.parse(lData);
      this.userId = userData?.id;
      this.getQuestionList();
      this.getCounts();
    }
  }

  async getCounts() {
    // Edit needed
    this.questionService
      .getQuestionStatusCounts(this.userId)
      .subscribe((res) => {
        this.dashboardDetails = res;
      });
  }
  getQuestionList() {
    const parms = `?user_id=${this.userId}`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
    });
  }
}
