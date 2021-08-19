import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-session-formation',
  templateUrl: './session-formation.component.html',
  styleUrls: ['./session-formation.component.css']
})
export class SessionFormationComponent implements OnInit {

  sessionFormations: any;

  constructor(private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.recupAllSessionFormation();
  }

  recupAllSessionFormation(): any {
    this.http.get(this.otherService.lienBack + 'session_formation').subscribe({
      next: (data) => { this.sessionFormations = data },
      error: (err) => { console.log(err) }
    });
  }
}
