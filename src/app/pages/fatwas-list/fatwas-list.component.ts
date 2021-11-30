import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatwas-list',
  templateUrl: './fatwas-list.component.html',
  styleUrls: ['./fatwas-list.component.scss'],
})
export class FatwasListComponent implements OnInit {
  data = [
    {
      qid: 'Q00001',
      shortQ: 'short Question - 1',
      longQ: 'Long Question - 2',
    },
    {
      qid: 'Q00002',
      shortQ: 'short Question - 2',
      longQ: 'Long Question - 2',
    },
    {
      qid: 'Q00003',
      shortQ: 'short Question - 3',
      longQ: 'Long Question - 3',
    },
    {
      qid: 'Q00004',
      shortQ: 'short Question - 4',
      longQ: 'Long Question - 4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
