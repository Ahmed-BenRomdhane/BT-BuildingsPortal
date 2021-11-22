import { Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss']
})
export class BuildingCardComponent implements OnInit {
  @Input() building!: Building;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToBuildingDetails(buildingId: string): void {
    this.router.navigate(['/building/' + buildingId]);
  }

}
