import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionModel } from '../models/QuestionModel';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss'],
})
export class FieldBuilderComponent implements OnInit {
  @Input() field: QuestionModel;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}
}
