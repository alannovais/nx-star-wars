import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '@force-app/star-wars';

@Injectable({
  providedIn: 'root',
})
export class ApiStarwarsService {
  constructor(private hppt: HttpClient) {}

  getAllPeople(): any {
    return this.hppt.get(`${CONSTANTS.URL}/people`);
  }

  getAllPlanets(): Observable<any> {
    return this.hppt.get(`${CONSTANTS.URL}/planets`);
  }
}
