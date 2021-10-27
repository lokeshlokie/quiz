import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model: NgbDateStruct;
  date: { year: number; month: number };
  title = 'questionnarie';

  constructor(private calendar: NgbCalendar) {}
}
