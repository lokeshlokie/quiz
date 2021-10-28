import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig, Questions } from "../../field.interface";
@Component({
  selector: "app-input",
  template: `
    <mat-form-field class="demo-full-width" [formGroup]="group">
      <input
        matInput
        [formControlName]="field.name"
        [placeholder]="field.text"
        [type]="field.type"
      />
    </mat-form-field>
  `,
  styles: [],
})
export class InputComponent implements OnInit {
  field: Questions;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
