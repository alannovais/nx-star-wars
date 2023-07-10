import { TestBed } from '@angular/core/testing';
import { R2d2AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [R2d2AppComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(R2d2AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome r2d2');
  });

  it(`should have as title 'r2d2'`, () => {
    const fixture = TestBed.createComponent(R2d2AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('r2d2');
  });
});
