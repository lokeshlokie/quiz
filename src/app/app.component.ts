import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig, Questions } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
// import * as questionaryjsonData from "./questionnary.json";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  questionaryData: Questions[] = [
    {
      linkId: "1",
      text: "Do you have allergies?",
      type: "boolean",
      name: "hasAllergies",
      option: [
        {
          valueCoding: {
            code: "yes",
            display: "Yes",
          },
        },
        {
          valueCoding: {
            code: "no",
            display: "No",
          },
        },
      ],
    },
    {
      linkId: "2",
      text: "What is your gender?",
      name: "gender",
      type: "choice",
      option: [
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "male",
            display: "Male",
          },
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "female",
            display: "Female",
          },
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "other",
            display: "Other",
          },
        },
      ],
    },
    {
      linkId: "3",
      text: "What is your date of birth?",
      type: "date",
      name: "dob",
    },
    {
      linkId: "4",
      text: "What is your country of birth?",
      type: "string",
      name: "birthCountry",
    },
    {
      linkId: "5",
      text: "What is your marital status?",
      type: "choice",
      name: "maritalStatus",
      option: [
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "married",
            display: "Married",
          },
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "single",
            display: "Single",
          },
        },
        {
          valueCoding: {
            system: "http://hl7.fhir/org",
            code: "divorced",
            display: "Divorced",
          },
        },
      ],
    },
    {
      linkId: "6",
      text: "Do you smoke?",
      type: "boolean",
      name: "isSmoker",
      option: [
        {
          valueCoding: {
            code: "yes",
            display: "Yes",
          },
        },
        {
          valueCoding: {
            code: "no",
            display: "No",
          },
        },
      ],
    },
    {
      linkId: "7",
      text: "Do you drink alchohol?",
      type: "boolean",
      name: "isAlchoholic",
      option: [
        {
          valueCoding: {
            code: "yes",
            display: "Yes",
          },
        },
        {
          valueCoding: {
            code: "no",
            display: "No",
          },
        },
      ],
    },
  ];

  ngOnInit() {
    console.log(this.questionaryData);
  }

  submit(value: any) {}
}
