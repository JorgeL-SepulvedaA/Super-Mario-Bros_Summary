import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Characters1Page } from './characters1.page';

describe('Characters1Page', () => {
  let component: Characters1Page;
  let fixture: ComponentFixture<Characters1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Characters1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
