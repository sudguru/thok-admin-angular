import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxEditComponent } from './infobox-edit.component';

describe('InfoboxEditComponent', () => {
  let component: InfoboxEditComponent;
  let fixture: ComponentFixture<InfoboxEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoboxEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoboxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
