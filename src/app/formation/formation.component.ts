import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailFormationComponent } from '../detail-formation/detail-formation.component';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations: any;
  constructor(private http: HttpClient, private otherService: OtherService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.http.get(this.otherService.lienBack + 'formation').subscribe({
      next: (data) => { this.formations = data },
      error: (err) => { console.log(err) }
    });
  }

  goToDetail(formation: any): void{
    const mydial = this.dialog.open(DetailFormationComponent, {
      data: formation
    });
  }

}
