import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.recupAllUser();
  }

  recupAllUser(): void {
    this.http.get('http://localhost:8084/person').subscribe({
      next: (data) => { this.users = data },
      error: (err) => { console.log(err) }
    });
  }

}
