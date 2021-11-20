import { Owner } from 'src/app/models/owner.model';
import { APIResult } from './../models/APIResult.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  private ENDPOINT = environment.ownersEndpoint;

  constructor(private http: HttpClient) { }

  IsOwnerAlreadyExists(cin: string): Observable<Owner | null> {
    return this.http.post<APIResult>(`${this.ENDPOINT}IsOwnerExists`, cin).pipe(map((result) => { return result.data }));
  }
}
