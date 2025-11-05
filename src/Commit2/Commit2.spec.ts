import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Commit2 } from './Commit2';

describe('Commit2', () => {
  let fixture: ComponentFixture<Commit2>;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(Commit2);
  });

  it('should render properly', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render head properly', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
