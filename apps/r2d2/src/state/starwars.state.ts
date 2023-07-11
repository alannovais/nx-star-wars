import { HttpErrorResponse } from '@angular/common/http';
import { ApiStarwarsService } from '../app/api/api-starwars.service';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs';
import { Persons } from '../interfaces/persons/persons.interface';

export interface StarWarsState {
  loading: boolean;
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Persons>;
}

export const INITIALSTATE: StarWarsState = {
  loading: false,
  count: 0,
  next: '',
  previous: '',
  results: [],
};

@Injectable()
export class StarWarsStore extends ComponentStore<StarWarsState> {
  //   starWrasState$ = this.select((state) => {
  //     state;
  //   });
  results$ = this.select((state) => {
    if (state.results.length === 0) this.selectPerson(state);
    return state.results;
  });
  getAllPersons$ = this.select((state) => this.selectPerson(state));
  loading$ = this.select((state) => state.loading);

  constructor(private apiStarWarsService: ApiStarwarsService) {
    super(INITIALSTATE);
  }

   selectPerson = this.effect<StarWarsState>((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.apiStarWarsService.getAllPeople().pipe(
          tapResponse(
            (persons: any) =>
              this.patchState({
                loading: true,
                count: persons.count,
                next: persons.next,
                previous: persons.previous,
                results: persons.results,
              }),
            (error: HttpErrorResponse) => console.log(error)
          )
        )
      )
    )
  );

  addCharacter(data: Persons) {
    this.setState((state) => {
      return {
        ...state,
        results: [...state.results, data],
      };
    });
  }

  updateCharacter = this.updater(
    (state: StarWarsState, updateValue: Persons) => {
      return {
        ...state,
        results: state.results.map((value, index) => {
          if (index === updateValue.id) {
            return updateValue;
          } else {
            return value;
          }
        }),
      };
    }
  );

  deleteCharacter = this.updater(
    (state: StarWarsState, deleteValue: Persons) => {
      return {
        ...state,
        results: state.results.filter((value, index) => !(index === deleteValue.id)),
      };
    }
  );
}
