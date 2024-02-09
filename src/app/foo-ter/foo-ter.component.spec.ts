import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooTerComponent } from './foo-ter.component';

describe('FooTerComponent', () => {
  let component: FooTerComponent;
  let fixture: ComponentFixture<FooTerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooTerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooTerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
