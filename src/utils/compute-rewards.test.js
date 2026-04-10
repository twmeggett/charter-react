import { expect, test } from 'vitest';
import { computeRewards } from './compute-rewards';

const mockTiers0 = [];

const mockTiers1 = [
  {
    start: 50,
    mult: 1,
  },
  {
    start: 100,
    mult: 2,
  }
]

const mockTiers2 = [
  {
    start: 50,
    mult: 1.5,
  },
  {
    start: 100,
    mult: 2,
  },
  {
    start: 200,
    mult: 3,
  },
]

test('compute reward(120, mockTiers0) === 0', () => {
  expect(computeRewards(120, mockTiers0)).toBe(0);
})

test('compute reward(49, mockTiers1) === 0', () => {
  expect(computeRewards(49, mockTiers1)).toBe(0);
})

test('compute reward(50, mockTiers1) === 0', () => {
  expect(computeRewards(50, mockTiers1)).toBe(0);
})

test('compute reward(120, mockTiers1) === 90 -> 50 + 40', () => {
  expect(computeRewards(120, mockTiers1)).toBe(90);
})

test('compute reward(250, mockTiers2) === 425 -> 75 + 200 + 150', () => {
  expect(computeRewards(250, mockTiers2)).toBe(425);
})
  