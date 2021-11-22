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

  constructor(private buildingsService: BuildingsService) { }

  ngOnInit(): void {
    this.buildingsService.GetAllBuildings().subscribe((allBuildings) => {
      console.log(allBuildings);
      this.buildings = allBuildings;

    })
  }

}
