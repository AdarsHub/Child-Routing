import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
class MockRouter {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          data: {
            userName: 'test'
          }
        }
      }
    };
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter: MockRouter;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[RouterTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter } // Provide the mock Router
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should set true to the loder when the loader is called true",()=>{
    component.loder(true);
    expect(component.isLoader).toBe(true);

  })
  it("Should set false to the loder when the loader is called false",()=>{
    component.loder(false);
    expect(component.isLoader).toBe(false);
    
  })
  it('should call getCurrentNavigation and set greetingsUser', () => {
    // Debugging: Check the value of greetingsUser
    console.log('greetingsUser:', component.greetingsUser);

    // Ensure greetingsUser is correctly set from the navigation data
    expect(component.greetingsUser).toBe('test');
  });
});
