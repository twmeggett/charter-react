import { expect, test } from 'vitest';
import { computeTotalsByMonth } from './computeTotalsByMonth';

const mockTransactions = [
  {
    date: '2023-03-10',
    amount: 150,
    rewards: 150,
    dateObject: new Date("2023-03-10")
  },
  {
    date: '2023-02-20',
    amount: 80,
    rewards: 30,
    dateObject: new Date("2023-02-20")
  },
  {
    date: '2023-01-15',
    amount: 120,
    rewards: 90,
    dateObject: new Date("2023-01-15")
  },
  {
    date: '2023-01-24',
    amount: 55,
    rewards: 5,
    dateObject: new Date("2023-01-24")
  },
  {
    date: '2023-02-23',
    amount: 20,
    rewards: 0,
    dateObject: new Date("2023-02-23")
  },
];

test('compute computeTotalsByMonth(mockTransactions)', () => {
  expect(computeTotalsByMonth(mockTransactions)).toEqual(
    { 
      "0": {amount: 175, rewards: 95},
      "1": {amount: 100, rewards: 30},
      "2": {amount: 150, rewards: 150}
    });
})
