import { expect, test } from 'vitest';
import { computeTotalsByMonth } from './computeTotalsByMonth';

const mocUnsortedTransactions = [
  {
    date: '2023-03-10',
    amount: 150,
    rewards: 150,
  },
  {
    date: '2023-02-20',
    amount: 80,
    rewards: 30,
  },
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
    date: '2023-02-23',
    amount: 20,
    rewards: 0,
  },
];

test('compute computeTotalsByMonth(mocUnsortedTransactions)', () => {
  expect(computeTotalsByMonth(mocUnsortedTransactions)).toEqual(
    { 
      "0": {amount: 175, rewards: 95},
      "1": {amount: 100, rewards: 30},
      "2": {amount: 150, rewards: 150}
    });
})
