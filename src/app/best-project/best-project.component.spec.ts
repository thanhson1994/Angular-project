import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProjectComponent } from './best-project.component';

describe('BestProjectComponent', () => {
  let component: BestProjectComponent;
  let fixture: ComponentFixture<BestProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
