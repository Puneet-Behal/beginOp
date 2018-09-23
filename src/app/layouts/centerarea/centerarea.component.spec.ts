import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterareaComponent } from './centerarea.component';

describe('CenterareaComponent', () => {
  let component: CenterareaComponent;
  let fixture: ComponentFixture<CenterareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
