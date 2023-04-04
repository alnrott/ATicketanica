import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  resourceUrl: string;
  
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'http://181.170.99.204:3000/evento/';
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceUrl + Id);
  }

}
