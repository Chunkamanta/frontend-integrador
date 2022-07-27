import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonesComponent } from './acordeones.component';

describe('AcordeonesComponent', () => {
  let component: AcordeonesComponent;
  let fixture: ComponentFixture<AcordeonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordeonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcordeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
