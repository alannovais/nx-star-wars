import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiStarwarsService {
  url = 'https://swapi.dev/api';
  

  constructor(private hppt: HttpClient) {}

  getAllPeople() {
    return this.hppt.get(`${this.url}/people`);
  }

}
