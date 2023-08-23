import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmodalComponent } from './submodal.component';

describe('SubmodalComponent', () => {
  let component: SubmodalComponent;
  let fixture: ComponentFixture<SubmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
