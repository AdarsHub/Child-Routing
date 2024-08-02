import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CustomerComponent } from './customer.component';

describe('CustomerDetailsComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 101 })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should be called the ngOnInit",()=>{
    component.ngOnInit();
  })
});