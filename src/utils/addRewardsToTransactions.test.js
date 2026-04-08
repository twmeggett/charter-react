import { expect, test } from 'vitest';
import { addRewardsToTransactions } from './addRewardsToTransactions';

const mockTransactions = [
  {
    date: '2023-01-15',
    amount: 120,
  },
  {
    date: '2023-01-24',
    amount: 55,
  },
  {
    date: '2023-02-20',
    amount: 80,
  },
  {
    date: '2023-02-23',
    amount: 20,
  },
  {
    date: '2023-03-10',
    amount: 150,
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

test('compute addRewardsToTransactions(mockTransactions, mockBreakpoints)', () => {
  expect(addRewardsToTransactions(mockTransactions, mockBreakpoints)).toEqual([
    {
      date: '2023-01-15',
      amount: 120,
      rewards: 90,
    },
    {
      date: '2023-01-24',
      amount: 55,
      rewards: 5,
    },
    {
      date: '2023-02-20',
      amount: 80,
      rewards: 30,
    },
    {
      date: '2023-02-23',
      amount: 20,
      rewards: 0,
    },
    {
      date: '2023-03-10',
      amount: 150,
      rewards: 150
    },
  ]);
})
