import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should set true to the loader",()=>{
    component.loder(true);
    expect(component.isLoader).toBe(true)
  })
  it("should set false to the loader",()=>{
    component.loder(false);
    expect(component.isLoader).toBe(false)
  })
});
