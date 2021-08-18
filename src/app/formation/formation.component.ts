import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.http.get('http://localhost:8084/formation').subscribe({
      next: (data) => { this.formations = data },
      error: (err) => { console.log(err) }
    });
  }

}
