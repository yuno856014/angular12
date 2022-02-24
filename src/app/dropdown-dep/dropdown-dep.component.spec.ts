import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDepComponent } from './dropdown-dep.component';

describe('DropdownDepComponent', () => {
  let component: DropdownDepComponent;
  let fixture: ComponentFixture<DropdownDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
