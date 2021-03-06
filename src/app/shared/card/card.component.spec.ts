import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('card', () => {
    it('should have a description', () => {
      fixture.componentInstance.description = 'Card description';
      expect(fixture.componentInstance.description).toEqual('Card description');
    });
    it('should have an image', () => {
      fixture.componentInstance.image = 'Card image';
      expect(fixture.componentInstance.image).toEqual('Card image');
    });
  });
});
