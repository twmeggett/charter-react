import { expect, test } from 'vitest';
import { computeRewards } from './computeRewards';

const mockBreakpoints1 = [
  {
    thresh: 50,
    mult: 1,
  },
  {
    thresh: 100,
    mult: 2,
  }
]

const mockBreakpoints2 = [
  {
    thresh: 50,
    mult: 1,
  },
  {
    thresh: 100,
    mult: 2,
  },
  {
    thresh: 200,
    mult: 3,
  },
]

test('compute reward(49, mockBreakpoints1) === 0', () => {
  expect(computeRewards(49, mockBreakpoints1)).toBe(0);
})

test('compute reward(50, mockBreakpoints1) === 0', () => {
  expect(computeRewards(50, mockBreakpoints1)).toBe(0);
})

test('compute reward(120, mockBreakpoints1) === 90 -> 50 + 40', () => {
  expect(computeRewards(120, mockBreakpoints1)).toBe(90);
})

test('compute reward(250, mockBreakpoints2) === 400 -> 50 + 200 + 150', () => {
  expect(computeRewards(250, mockBreakpoints2)).toBe(400);
})
