import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Characters2Page } from './characters2.page';

describe('Characters2Page', () => {
  let component: Characters2Page;
  let fixture: ComponentFixture<Characters2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Characters2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
