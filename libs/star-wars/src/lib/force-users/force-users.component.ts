import { Component, OnInit } from '@angular/core';
import { ApiStarwarsService } from './../api-starwars.service';

@Component({
  selector: 'force-app-force-users',
  templateUrl: './force-users.component.html',
  styleUrls: ['./force-users.component.css'],
  providers: [ApiStarwarsService],
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

  constructor(private apiStarwarsService: ApiStarwarsService) {}

  ngOnInit() {
    this.loadDatas();
  }

  loadDatas() {
    this.apiStarwarsService.getAllPeople().subscribe((object: any) => {
      this.loading = !this.loading;
      console.log(object);
      this.result = object.results;
      this.buttonNext = object.next;
      this.buttonPrevious = object.previous;
    });
  }

  insertPeople() {
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
