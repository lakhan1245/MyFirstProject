import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputcomponentComponent } from './outputcomponent.component';

describe('OutputcomponentComponent', () => {
  let component: OutputcomponentComponent;
  let fixture: ComponentFixture<OutputcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
