import { ActivatedRoute } from '@angular/router';
import { ListUserViewModel } from '@force-app/star-wars';
import { Persons } from '@force-app/star-wars';

import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PersonsStore } from './component-store/persons.state';

@Component({
  selector: 'force-app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  result: Persons[] = [];
  editResult: any;
  deltResult: any;
  loading = false;
  buttonNext = '';
  buttonPrevious = '';
  visibleEdit = false;
  visibleDel = false;
  dataTable$ = this.personsStore.results$; 
  person: Persons = {
    name: '',
    mass: 0,
    gender: '',
    created: null,
    edited: null,
  };
  id = 0;
  nameUser = this.personsStore.results$;

  constructor(
    private personsStore: PersonsStore,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadDatas();
  }

  loadDatas() {
    this.personsStore.loadPersons(this.route.snapshot.data['persons']);
    this.loading = this.personsStore.loading$ ? true : false;
    console.log(this.loading);
    this.store.select(ListUserViewModel).subscribe((e: any) => {
      this.nameUser = e.logged;
    });
  }

  setIndexToWork() {
    const valueArray = this.dataTable$.pipe(
      map((e: Persons[]): void => {
        e.forEach((element: Persons, index: number): void | number => {
          if (
            this.editResult?.name === element.name ||
            this.deltResult?.name === element.name
          )
            this.id = index;
        });
      })
    );
    valueArray.subscribe();
  }

  insertPeople() {
    this.editResult = {};
    this.visibleEdit = !this.visibleEdit;
  }

  showDialog(data: Event) {
    this.visibleEdit = !this.visibleEdit;
    if (this.visibleEdit) this.editResult = data;
    this.setIndexToWork();
  }

  delDialog(data: any) {
    this.visibleDel = !this.visibleDel;
    if (this.visibleDel) this.deltResult = data;
    this.setIndexToWork();
  }

  closeDialog(data: any) {
    this.visibleEdit = this.visibleDel = data;

    if (this.deltResult?.name) {
      this.person = this.deltResult;
      this.person.id = this.id;
      this.personsStore.deleteCharacter(this.person);
    }

    this.id = 0;
    this.deltResult = {};
  }

  confirmOption(data: any) {
    this.person = data;
    this.person.id = this.id;
    if (this.editResult?.name) {
      this.person.created = this.editResult.created;
      this.person.edited = new Date().toString();
      this.personsStore.updateCharacter(this.person);
    } else {
      this.person.created = new Date().toString();
      this.personsStore.addCharacter(this.person);
    }
    this.id = 0;
    this.visibleEdit = !this.visibleEdit;
  }
}
