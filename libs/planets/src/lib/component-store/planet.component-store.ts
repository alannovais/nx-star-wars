import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Planets } from '../interfaces/planets.interface';

export const INITIALSTATE: Planets[] = [
  {
    name: '',
    created: '',
    edited: '',
    diameter: '',
    films: [],
    gravity: '',
    orbital_period: '',
    population: '',
    residents: [],
    rotation_period: '',
    surface_water: '',
    terrain: '',
    url: '',
  },
];

@Injectable()
export class PlanetsComponentStore extends ComponentStore<Planets[]> {
  results$ = this.select(this.state);
  constructor() {
    super(INITIALSTATE);
  }

  loadData = this.updater((state, data: Planets[]) => {
    return [...state, ...data];
  });
}
