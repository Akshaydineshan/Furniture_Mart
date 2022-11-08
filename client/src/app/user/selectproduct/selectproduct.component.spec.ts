import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectproductComponent } from './selectproduct.component';

describe('SelectproductComponent', () => {
  let component: SelectproductComponent;
  let fixture: ComponentFixture<SelectproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
