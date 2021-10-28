import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig, Questions } from "../../field.interface";
@Component({
  selector: "app-select",
  template: `
    <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
      <mat-select [placeholder]="field.text" [formControlName]="field.name">
        <mat-option
          *ngFor="let item of field.option"
          [value]="item.valueCoding.code"
          >{{ item.valueCoding.display }}</mat-option
        >
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class SelectComponent implements OnInit {
  field: Questions;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
