import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address.model';
import { APIResult } from '../models/APIResult.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private ENDPOINT = environment.addressesEndpoint;

  constructor(private http: HttpClient) { }

  CreateAddress(address: Address): Observable<APIResult> {
    return this.http.post<APIResult>(`${this.ENDPOINT}CreateAddress`, address);
  }
}
