import { BuildingImage } from './../models/building-image.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { APIResult } from '../models/APIResult.model';
import { Building } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  private ENDPOINT = environment.buildingsEndpoint;
  private ENDPOINT_IMAGES = environment.buildingImagesEndpoint;

  constructor(private http: HttpClient) { }

  CreateBuilding(building: Building): Observable<any> {
    return this.http.post<APIResult>(`${this.ENDPOINT}CreateBuilding`, building).pipe(map((result) => { return result.Data }));
  }

  GetBuilding(buildingId: string): Observable<Building> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<APIResult>(`${this.ENDPOINT}GetBuilding`, `'${buildingId}'`, httpOptions).pipe(map((result) => { return result.Data }));
  }

  GetAllBuildings(): Observable<Building[]> {
    return this.http.get<APIResult>(`${this.ENDPOINT}GetAllBuildings`).pipe(map((result) => { return result.Data }));
  }

  CreateBuildingImage(buildingImage: BuildingImage): Observable<any> {
    return this.http.post<APIResult>(`${this.ENDPOINT_IMAGES}CreateBuildingImage`, buildingImage).pipe(map((result) => { return result.Data }));
  }
}
