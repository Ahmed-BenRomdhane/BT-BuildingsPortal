import { BuildingsService } from './../../services/buildings.service';
import { Building } from './../../models/building.model';
import { BuildingImage } from './../../models/building-image.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  buildingId: string = '';
  buildingImages: BuildingImage[] = [];
  building: Building | undefined;

  constructor(private route: ActivatedRoute, private buildingsService: BuildingsService) { }

  ngOnInit(): void {
    this.buildingId = this.route.snapshot.paramMap.get('buildingId') ?? '';
    this.buildingsService.GetBuilding(this.buildingId).subscribe((building) => {
      this.building = building;
      console.log(this.building);
      this.buildingImages = this.building.BuildingImages ?? [];
    });
  }

}
