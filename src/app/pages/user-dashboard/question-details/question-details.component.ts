import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss'],
})
export class QuestionDetailsComponent implements OnInit {
  userQuestionDetails: any;
  id: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
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
      console.log('res', res);
    });
  }
}
