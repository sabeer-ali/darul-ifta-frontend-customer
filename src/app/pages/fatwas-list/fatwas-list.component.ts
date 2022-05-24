import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fatwas-list',
  templateUrl: './fatwas-list.component.html',
  styleUrls: ['./fatwas-list.component.scss'],
})
export class FatwasListComponent implements OnInit, OnChanges {
  @Input() questions: any;
  questionsList: any = [];
  q: any;
  url: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
    this.url = this.router.url;
    if (this.questions) {
      this.questionsList = this.questions;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.questionsList = this.questions;
  }
}
