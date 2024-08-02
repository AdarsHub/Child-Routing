import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponent } from './customer-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDetailsComponent],
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
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should be call Ng onInit with correct id", () => {
    spyOn(component, "getCustomer");
    component.ngOnInit();
    expect(component.getCustomer).toHaveBeenCalledWith(101);
  })

  it("shoud called get Customer method with correct id",()=>{
    component.getCustomer(101);
    expect(component.customerRecord.name).toBe('Travis Vincent');
    expect(component.customerRecord.city).toBe("Nässjö");
  })
  it("should be return undefined if customer id not found",()=>{
    component.getCustomer(888);
    expect(component.customerRecord).toBeUndefined();
  })
});
