import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Characters3Page } from './characters3.page';

describe('Characters3Page', () => {
  let component: Characters3Page;
  let fixture: ComponentFixture<Characters3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Characters3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
