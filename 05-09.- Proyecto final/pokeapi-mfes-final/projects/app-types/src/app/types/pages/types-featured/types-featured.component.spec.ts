import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesFeaturedComponent } from './types-featured.component';

describe('TypesFeaturedComponent', () => {
  let component: TypesFeaturedComponent;
  let fixture: ComponentFixture<TypesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
