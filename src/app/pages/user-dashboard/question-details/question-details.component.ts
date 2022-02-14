import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss'],
})
export class QuestionDetailsComponent implements OnInit {
  userQuestionDetails: any;
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestionList();
  }

  getQuestionList() {
    const parms = `?id=1`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionDetails = res;
      this.userQuestionDetails = this.userQuestionDetails[0];
      console.log('res', res);
    });
  }
}
