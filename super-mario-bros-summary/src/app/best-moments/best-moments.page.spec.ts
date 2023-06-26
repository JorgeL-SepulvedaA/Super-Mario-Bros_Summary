import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BestMomentsPage } from './best-moments.page';

describe('BestMomentsPage', () => {
  let component: BestMomentsPage;
  let fixture: ComponentFixture<BestMomentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BestMomentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
