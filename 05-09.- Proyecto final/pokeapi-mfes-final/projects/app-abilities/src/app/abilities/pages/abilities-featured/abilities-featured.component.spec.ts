import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesFeaturedComponent } from './abilities-featured.component';

describe('AbilitiesFeaturedComponent', () => {
  let component: AbilitiesFeaturedComponent;
  let fixture: ComponentFixture<AbilitiesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
