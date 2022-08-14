import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QuestionRoot } from '../../models/question.model';

@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.scss'],
})
export class QuestionBuilderComponent implements OnInit {
  isCurrentPage = true;
  questions: QuestionRoot[] = [];
  tableColumns: string[] = ['title', 'created_on'];
  dataSource = new MatTableDataSource(this.questions);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.questions = [
      { title: 'Question 1', created_on: new Date().toDateString() },
      { title: 'Question 2', created_on: new Date().toDateString() },
      { title: 'Question 3', created_on: new Date().toDateString() },
      { title: 'Question 4', created_on: new Date().toDateString() },
    ];
    this.dataSource = new MatTableDataSource(this.questions);
  }
  navigateToCreateForm() {
    this.router.navigateByUrl('question-builder/create');
    this.isCurrentPage = false;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
