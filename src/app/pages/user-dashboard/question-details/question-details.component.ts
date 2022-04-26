import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from 'src/app/core/service/answers/answers.service';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss'],
})
export class QuestionDetailsComponent implements OnInit {
  userQuestionDetails: any;
  id: any;
  answerDetails: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private answerService: AnswersService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.getQuestionList();
  }

  getQuestionList() {
    const parms = `?id=${this.id}`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionDetails = res;
      this.userQuestionDetails = this.userQuestionDetails[0];
      this.answerSetails();
    });
  }

  answerSetails() {
    this.answerService.getAnswers(this.id).subscribe((res) => {
      this.answerDetails = res;
      this.answerDetails = this.answerDetails[0];
      console.log('this.answerDetails', this.answerDetails);
    });
  }
}
