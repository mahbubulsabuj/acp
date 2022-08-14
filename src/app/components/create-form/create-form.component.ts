import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  questionTypes: string[] = [
    'Multiple Choice',
    'Linear Scale',
    'Checkbox',
    'Short Text',
    'File Upload',
  ];
  allowedFileTypes: string[] = ['DOCUMENT', 'SPREADSHEET', 'PDF', 'IMAGE'];
  maximumFileSizes: string[] = ['1MB', '5MB', '10MB', '25MB'];
  numberOptions: number[] = [0, 20, 40, 60, 80, 100];
  questionForm = this.fb.group({
    title: ['', Validators.required],
    desc: ['', Validators.required],
    questionType: ['Multiple Choice', Validators.required],
    questionTitle: ['', Validators.required],
    labelLeft: [0],
    labelRight: [100],
    questionAnswers: this.fb.array([]),
    shortTextAnswer: [{ value: '', disabled: true }],
    allowedFileTypes: [[]],
    maximumFileSize: [],
  });
  constructor(private fb: FormBuilder, private location: Location) {}

  ngOnInit(): void {
    this.addQuestionAnswer();
  }
  onQuesTypeChange() {
    console.log('YES');
  }

  addQuestionAnswer() {
    const answer = this.fb.group({
      option: '',
    });
    this.questionAnswers.push(answer);
  }
  deleteAnswer(index: number) {
    this.questionAnswers.removeAt(index);
  }
  get questionAnswers() {
    return this.questionForm.controls['questionAnswers'] as FormArray;
  }
  onLabelChange(type: number) {}
  onQuestionFormSubmit() {
    console.log(this.questionForm);
  }
  goPreviousPage() {
    this.location.back();
  }
}
