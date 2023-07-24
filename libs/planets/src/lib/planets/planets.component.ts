import { Store } from '@ngrx/store';
import { PlanetsComponentStore } from './../component-store/planet.component-store';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ListUserViewModel } from '@force-app/star-wars';

@Component({
  selector: 'force-app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  loading = true;
  nameUser = '';
  dataTable$ = this.planetsComponentStore.results$;
  visibleEdit = false;
  editResult = false;
  visibleDel = false;
  deltResult = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private planetsComponentStore: PlanetsComponentStore
  ) {}

  ngOnInit(): void {
    this.planetsComponentStore.loadData(
      this.route.snapshot.data['planets'].results
    );
    this.store
      .select(ListUserViewModel)
      .subscribe((e) => (this.nameUser = e.logged));
  }

  insertPeople() {}
  showDialog(event: Event) {}
  delDialog(event: Event) {}
  closeDialog(event: Event) {}
  confirmOption(event: Event) {}
}
