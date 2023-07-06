import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMangementPeopleComponent } from './form-mangement-people.component';

describe('FormMangementPeopleComponent', () => {
  let component: FormMangementPeopleComponent;
  let fixture: ComponentFixture<FormMangementPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMangementPeopleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormMangementPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
