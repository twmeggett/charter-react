import { expect, test } from 'vitest';
import { transformTransactions } from './transform-transactions';

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

const mockTiers = [
  {
    start: 50,
    mult: 1,
  },
  {
    start: 100,
    mult: 2,
  }
]

test('compute transformTransactions(mockTransactions, mockTiers)', () => {
  expect(transformTransactions(mockTransactions, mockTiers)).toEqual([
    {
      date: '2023-01-15',
      amount: 120,
      rewards: 90,
      dateObject: new Date("2023-01-15"),
    },
    {
      date: '2023-01-24',
      amount: 55,
      rewards: 5,
      dateObject: new Date("2023-01-24"),
    },
    {
      date: '2023-02-20',
      amount: 80,
      rewards: 30,
      dateObject: new Date("2023-02-20"),
    },
    {
      date: '2023-02-23',
      amount: 20,
      rewards: 0,
      dateObject: new Date("2023-02-23"),
    },
    {
      date: '2023-03-10',
      amount: 150,
      rewards: 150,
      dateObject: new Date("2023-03-10"),
    },
  ]);
})
