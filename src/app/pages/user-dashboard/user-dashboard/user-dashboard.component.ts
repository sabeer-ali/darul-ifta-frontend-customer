import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IsLoggedGuard } from 'src/app/core/auth/is-logged.guard';
import { QuestionService } from 'src/app/core/service/question/question.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  userDetails: any;
  dashboardDetails: any = [];
  userQuestionList: any = [];
  userId: any;
  isAsked = false;
  q: any;

  constructor(
    private router: Router,
    private userAuth: IsLoggedGuard,
    private questionService: QuestionService,
    private titlePage: Title
  ) {
    let userDetails = sessionStorage.getItem('userData');
    if (userDetails) {
      this.userDetails = JSON.parse(userDetails);
      console.log("sessionStorage.getItem('userData')", this.userDetails);
    }
  }

  ngOnInit(): void {
    this.titlePage.setTitle('User Home');
    if (!this.userAuth.canActivate()) {
      this.router.navigateByUrl('/login');
    }
    this.isAsked = false;
    this.getCounts();
    this.getQuestionList();
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
    this.isAsked = false;
    const parms = `?user_id=${this.userDetails.id}`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
    });
  }

  getPulishedQuestions() {
    this.isAsked = false;
    const parms = `?user_id=${this.userDetails.id}&status=8`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
    });
  }

  getPendingQuestions() {
    this.isAsked = false;
    const parms = `?user_id=${this.userDetails.id}&status=1`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
    });
  }
  getRejectedQuestions() {
    this.isAsked = false;
    const parms = `?user_id=${this.userDetails.id}&status=2`;
    this.questionService.getQuestionItem(parms).subscribe((res) => {
      this.userQuestionList = res;
    });
  }

  gotToask() {
    this.isAsked = true;
    this.router.navigateByUrl('/user-home/ask-fatwas');
  }
}
