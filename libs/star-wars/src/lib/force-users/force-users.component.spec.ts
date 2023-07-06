import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForceUsersComponent } from './force-users.component';

describe('ForceUsersComponent', () => {
  let component: ForceUsersComponent;
  let fixture: ComponentFixture<ForceUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForceUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
