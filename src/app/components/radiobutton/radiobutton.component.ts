import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig, Questions } from "../../field.interface";
@Component({
  selector: "app-radiobutton",
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label class="radio-label-padding">{{ field.text }}:</label>
      <mat-radio-group [formControlName]="field.name">
        <mat-radio-button
          *ngFor="let item of field.option"
          [value]="item.valueCoding.code"
          >{{ item.valueCoding.display }}</mat-radio-button
        >
      </mat-radio-group>
    </div>
  `,
  styles: [],
})
export class RadiobuttonComponent implements OnInit {
  field: Questions;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
