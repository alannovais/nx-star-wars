import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap } from 'rxjs';
import { ApiStarwarsService } from '../api/api-starwars.service';
import { Persons } from '@force-app/star-wars';

export interface PersosnState {
  loading: boolean;
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Persons>;
}

export const INITIALSTATE: PersosnState = {
  loading: false,
  count: 0,
  next: '',
  previous: '',
  results: [],
};

@Injectable()
export class PersonsStore extends ComponentStore<PersosnState> {
  results$ = this.select((state) => {
    if (state.results.length === 0) this.selectPerson(state);
    return state.results;
  });
  getAllPersons$ = this.select((state) => this.selectPerson(state));
  loading$ = this.select((state) => state.loading);

  constructor(private apiStarWarsService: ApiStarwarsService) {
    super(INITIALSTATE);
  }

  selectPerson = this.effect<PersosnState>((trigger$) =>
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

  loadPersons = this.updater((state: PersosnState, data: any) => {
    return {
      ...state,
      loading: true,
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results
    };
  });

  addCharacter = this.updater((state: PersosnState, data: Persons) => {
    return {
      ...state,
      results: [...state.results, data],
    };
  });

  updateCharacter = this.updater(
    (state: PersosnState, updateValue: Persons) => {
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
    (state: PersosnState, deleteValue: Persons) => {
      return {
        ...state,
        results: state.results.filter(
          (value, index) => !(index === deleteValue.id)
        ),
      };
    }
  );
}
