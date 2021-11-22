import { Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { BuildingsService } from './../../services/buildings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  buildings: Building[] = [];

  constructor(private buildingsService: BuildingsService, private router: Router) { }

  ngOnInit(): void {
    this.buildingsService.GetAllBuildings().subscribe((allBuildings) => {
      this.buildings = allBuildings;
    })
  }

  goToNewBuilding(): void {
    this.router.navigate(['/build']);
  }

}
