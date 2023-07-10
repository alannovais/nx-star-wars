import { StarWarsInterface } from './../../../../../apps/r2d2/src/interfaces/star-wars.interface';
import { StarWarsStore } from './../../../../../apps/r2d2/src/state/starwars.state';
import { Component, OnInit } from '@angular/core';
import { ApiStarwarsService } from './../api-starwars.service';

@Component({
  selector: 'force-app-force-users',
  templateUrl: './force-users.component.html',
  styleUrls: ['./force-users.component.css'],
  providers: [ApiStarwarsService, StarWarsStore],
})
export class ForceUsersComponent implements OnInit {
  result: any = [];
  editResult: any;
  deltResult: any;
  loading = false;
  buttonNext = '';
  buttonPrevious = '';
  visibleEdit = false;
  visibleDel = false;
  teste$ = this.starWarsStore.results$;
  valueTeste: StarWarsInterface = {
    count: 0,
    next: '',
    previous: '',
    results: [{name: 'Alan', mass: 90, gender: 'male'}],
  };

  valueTeste2: StarWarsInterface = {
    count: 0,
    next: '',
    previous: '',
    results: [{name: 'Avany', mass: 63, gender: 'famale'}],
  };

  constructor(
    private apiStarwarsService: ApiStarwarsService,
    private starWarsStore: StarWarsStore
  ) {}

  ngOnInit() {
    this.starWarsStore.addCharacter(this.valueTeste);
    this.loadDatas();
  }

  loadDatas() {
    this.teste$.subscribe(e => console.log(e));
    this.starWarsStore.updateCharacter(this.valueTeste2);
    this.apiStarwarsService.getAllPeople().subscribe((object: any) => {
      this.loading = !this.loading;
      console.log(object);
      this.result = object.results;
      this.buttonNext = object.next;
      this.buttonPrevious = object.previous;
    });
  }

  insertPeople() {
    console.log(this.teste$);

    this.editResult = {};
    this.visibleEdit = !this.visibleEdit;
  }

  showDialog(data: any) {
    this.visibleEdit = !this.visibleEdit;
    if (this.visibleEdit) this.editResult = data;
  }

  delDialog(data: any) {
    this.visibleDel = !this.visibleDel;
    if (this.visibleDel) this.deltResult = data;
  }

  closeDialog(data: any) {
    this.visibleEdit = this.visibleDel = data;
  }
}
