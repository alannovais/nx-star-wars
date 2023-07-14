import { CONSTANTS } from './../../../star-wars/src/constants/urls-consts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiStarwarsService {
  constructor(private hppt: HttpClient) {}

  getAllPeople() {
    return this.hppt.get(`${CONSTANTS.URL}/people`);
  }
}
