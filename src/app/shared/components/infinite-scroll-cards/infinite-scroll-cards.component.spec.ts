import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollCardsComponent } from './infinite-scroll-cards.component';

describe('InfiniteScrollCardsComponent', () => {
  let component: InfiniteScrollCardsComponent;
  let fixture: ComponentFixture<InfiniteScrollCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScrollCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteScrollCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
