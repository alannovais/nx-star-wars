import { ApiStarwarsService } from '@force-app/data-access';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { PlanetsRequest } from '../interfaces/planets-request.interface';

@Injectable({ providedIn: 'root' })
export class PlanetsResolver implements Resolve<PlanetsRequest> {

  constructor(private api: ApiStarwarsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PlanetsRequest> {
    return this.api.getAllPlanets().pipe(
      map((result) => {
        if (result) return result;
        else return undefined;
      })
    );
  }
}
