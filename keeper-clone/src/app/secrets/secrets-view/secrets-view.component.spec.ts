import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretsViewComponent } from './secrets-view.component';

describe('SecretsViewComponent', () => {
  let component: SecretsViewComponent;
  let fixture: ComponentFixture<SecretsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
