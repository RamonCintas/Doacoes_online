import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelComponent2 } from './painel2.component';

describe('PainelComponent2', () => {
  let component: PainelComponent2;
  let fixture: ComponentFixture<PainelComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
