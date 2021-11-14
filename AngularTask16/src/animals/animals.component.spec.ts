import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalsComponent } from './animals.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AnimalsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AnimalsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularTask13'`, () => {
    const fixture = TestBed.createComponent(AnimalsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularTask13');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AnimalsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularTask13 app is running!');
  });
});
