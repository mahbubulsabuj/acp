import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  searchType = 'display_name';
  searchPlaceholderText = 'Search display name';
  users: User[] = [];
  tableColumns: string[] = [
    'display_name',
    'email',
    'role',
    'last_login',
    'status',
  ];
  dataSource = new MatTableDataSource(this.users);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.users = [
      {
        display_name: 'Phlip Lee',
        email: 'hafizur.rahman@selise.ch',
        role: 'Admin',
        last_login: '12-01-2022',
        status: false,
      },
      {
        display_name: 'Systemadmin Certificationplatform (Admin)',
        email: 'kawsar.ahmed@selise.ch',
        role: 'Admin',
        last_login: '12-08-2022',
        status: true,
      },
    ];
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.filterPredicate = (data: any, filtersJson: string) => {
      const matchFilter: any[] = [];
      const filters = JSON.parse(filtersJson);

      filters.forEach((filter: { id: number | string; value: string }) => {
        const val = data[filter.id] === null ? '' : data[filter.id];
        matchFilter.push(
          val.toLowerCase().includes(filter.value.toLowerCase())
        );
      });
      return matchFilter.every(Boolean);
    };
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const tableFilters = [];
    tableFilters.push({
      id: this.searchType,
      value: filterValue,
    });
    this.dataSource.filter = JSON.stringify(tableFilters);
  }
}
