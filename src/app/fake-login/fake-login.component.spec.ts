import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLoginComponent } from './fake-login.component';

describe('FakeLoginComponent', () => {
  let component: FakeLoginComponent;
  let fixture: ComponentFixture<FakeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
