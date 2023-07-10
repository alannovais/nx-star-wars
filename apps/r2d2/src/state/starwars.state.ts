import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { StarWarsInterface } from '../interfaces/star-wars.interface';

export interface StarWarsState {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<any>;
}

export const INITIALSTATE: StarWarsState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};

@Injectable()
export class StarWarsStore extends ComponentStore<StarWarsState> {
  results$ = this.select((state) => state.results);

  constructor() {
    super(INITIALSTATE);
  }

  addCharacter(data: StarWarsInterface) {
    this.setState((state) => {
      return {
        ...state,
        results: [...state.results, data],
      };
    });
  }

  updateCharacter = this.updater(
    (state: StarWarsState, updateValue: StarWarsInterface) => {
      return {
        ...state,
        results: state.results.map((value) => {
          if (updateValue.results === value) {
            return value;
          } else {
            return updateValue;
          }
        }),
      };
    }
  );

  deleteCharacter(state: StarWarsState, deleteValue: StarWarsInterface) {
    return {
      ...state,
      starWars: state.results.filter((value) => {
        if (deleteValue === value) {
          return false;
        } else {
          return true;
        }
      }),
    };
  }
}
