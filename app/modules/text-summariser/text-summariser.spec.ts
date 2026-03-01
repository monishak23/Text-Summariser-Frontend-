import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSummariser } from './text-summariser';

describe('TextSummariser', () => {
  let component: TextSummariser;
  let fixture: ComponentFixture<TextSummariser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSummariser],
    }).compileComponents();

    fixture = TestBed.createComponent(TextSummariser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
