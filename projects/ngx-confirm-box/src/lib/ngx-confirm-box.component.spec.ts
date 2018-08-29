import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConfirmBoxComponent } from './ngx-confirm-box.component';

describe('NgxConfirmBoxComponent', () => {
  let component: NgxConfirmBoxComponent;
  let fixture: ComponentFixture<NgxConfirmBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxConfirmBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxConfirmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
