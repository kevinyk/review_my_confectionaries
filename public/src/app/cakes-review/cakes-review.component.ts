import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cakes-review',
  templateUrl: './cakes-review.component.html',
  styleUrls: ['./cakes-review.component.css']
})
export class CakesReviewComponent implements OnInit {
  @Input() myCake;
  constructor() { }

  ngOnInit() {
  }

}