import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  dashboardDetails: any = [];

  userQuestionList: any = [];

  ngOnInit(): void {
    this.getQuestionList();
    this.getCounts();
  }

  getCounts() {
    // Edit needed
    this.questionService.getQuestionStatusCounts(1).subscribe((res) => {
      this.dashboardDetails = res;
    });
  }
  getQuestionList() {
    const parms = `?user_id=1`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
    });
  }
}
