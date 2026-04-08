import { expect, test } from 'vitest';
import { computeTotalsByMonth } from './computeTotalsByMonth';

const mockTransactions = [
  {
    date: '2023-03-10',
    amount: 150,
  },
  {
    date: '2023-02-20',
    amount: 80,
  },
  {
    date: '2023-01-15',
    amount: 120,
  },
  {
    date: '2023-01-24',
    amount: 55,
  },
  {
    date: '2023-02-23',
    amount: 20,
  },
];

const mockBreakpoints = [
  {
    thresh: 50,
    mult: 1,
  },
  {
    thresh: 100,
    mult: 2,
  }
]

test('compute computeTotalsByMonth(mockTransactions, mockBreakpoints) { 0: {amount: 175, rewards: 95}, 1: {amount: 100, rewards: 30}, 2: {amount: 150, rewards: 150} }', () => {
  expect(computeTotalsByMonth(mockTransactions, mockBreakpoints)).toEqual(
    { 
      "0": {amount: 175, rewards: 95},
      "1": {amount: 100, rewards: 30},
      "2": {amount: 150, rewards: 150}
    });
})
