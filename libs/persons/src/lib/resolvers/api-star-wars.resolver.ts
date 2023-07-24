import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Persons } from '@force-app/star-wars';
import { Observable, map } from 'rxjs';
import { ApiStarwarsService } from '@force-app/data-access';

@Injectable({ providedIn: 'root' })
export class ApiStarWarsResolver implements Resolve<Persons> {
  constructor(private apiService: ApiStarwarsService) {}

  resolve(): Observable<Persons> {
    return this.apiService.getAllPeople().pipe(
      map((result) => {
        if (result) return result;
        else return console.log('');
      })
    );
  }
}
