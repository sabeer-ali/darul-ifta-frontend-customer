import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from 'src/app/core/service/answers/answers.service';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-fatwa-answer',
  templateUrl: './fatwa-answer.component.html',
  styleUrls: ['./fatwa-answer.component.scss'],
})
export class FatwaAnswerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private answerService: AnswersService,
    private questionService: QuestionService
  ) {}

  id: any;
  answerDetails: any = null;
  questionDetails: any = null;
  rtlLanguage = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID', this.id);
    if (this.id) this.getQuestionAnsAnswer(this.id);
  }

  async getQuestionAnsAnswer(id: any) {
    this.answerService.getAnswers(id).subscribe((res) => {
      this.answerDetails = res;
      this.answerDetails = this.answerDetails[0];

      if (this.answerDetails) this.getQuestionsDetails();
    });
  }

  getQuestionsDetails() {
    let params = `?id=${this.answerDetails?.question_id}`;
    this.questionService.getQuestionItem(params).subscribe((rez) => {
      this.questionDetails = rez;
      this.questionDetails = this.questionDetails[0];

      console.log('11111', rez);

      this.rtlLanguage =
        this.questionDetails?.language?.id == 4 ||
        this.questionDetails?.language?.id == 3
          ? true
          : false;
    });
  }
}
