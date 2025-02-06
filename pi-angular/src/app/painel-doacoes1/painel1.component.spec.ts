import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelComponent1 } from './painel1.component';

describe('PainelComponent1', () => {
  let component: PainelComponent1;
  let fixture: ComponentFixture<PainelComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
