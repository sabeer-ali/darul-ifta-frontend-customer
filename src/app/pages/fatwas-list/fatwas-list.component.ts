import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-fatwas-list',
  templateUrl: './fatwas-list.component.html',
  styleUrls: ['./fatwas-list.component.scss'],
})
export class FatwasListComponent implements OnInit, OnChanges {
  @Input() questions: any;
  questionsList: any = [];
  constructor() {}

  ngOnInit(): void {
    if (this.questions) {
      this.questionsList = this.questions;
      console.log('questions in 2', this.questions);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('questions in 3', this.questions);
    this.questionsList = this.questions;
  }
}
