import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  dashboardDetails = {
    fatwas: 10,
    answersFatwas: 5,
    rejectedFatwas: 3,
  };

  userQuestionList: any;

  ngOnInit(): void {
    this.getQuestionList();
  }

  getQuestionList() {
    const parms = `?user_id=1`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
      console.log('res', res);
    });
  }
}
