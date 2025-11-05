import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Commit } from './Commit';

describe('Commit', () => {
  let fixture: ComponentFixture<Commit>;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(Commit);
  });

  it('should render properly', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render head properly', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
