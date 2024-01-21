import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFooterComponent } from './home-page-footer.component';

describe('HomePageFooterComponent', () => {
  let component: HomePageFooterComponent;
  let fixture: ComponentFixture<HomePageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
