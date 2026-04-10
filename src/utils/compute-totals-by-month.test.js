import { expect, test } from 'vitest';
import { computeTotalsByMonth } from './compute-totals-by-month';

const mockTransactions = [
  {
    customerId: 'customer1',
    date: '2023-03-10',
    amount: 150,
    rewards: 150,
    dateObject: new Date("2023-03-10")
  },
  {
    customerId: 'customer2',
    date: '2023-02-20',
    amount: 80,
    rewards: 30,
    dateObject: new Date("2023-02-20")
  },
  {
    customerId: 'customer1',
    date: '2023-01-15',
    amount: 120,
    rewards: 90,
    dateObject: new Date("2023-01-15")
  },
  {
    customerId: 'customer2',
    date: '2023-03-10',
    amount: 200,
    rewards: 250,
    dateObject: new Date("2023-03-10")
  },
  {
    customerId: 'customer1',
    date: '2023-01-24',
    amount: 55,
    rewards: 5,
    dateObject: new Date("2023-01-24")
  },
  {
    customerId: 'customer2',
    date: '2023-02-23',
    amount: 20,
    rewards: 0,
    dateObject: new Date("2023-02-23")
  },
];

test('compute computeTotalsByMonth(mockTransactions)', () => {
  expect(computeTotalsByMonth(mockTransactions)).toEqual(
    { 
      "Jan": {
        "customer1": {
          amount: 175,
          rewards: 95
        },
      },
      "Feb": {
        "customer2": {
          amount: 100,
          rewards: 30
        }
      },
      "Mar": {
        "customer1": {
          amount: 150,
          rewards: 150
        },
        "customer2": {
          amount: 200,
          rewards: 250
        }
      }
    });
})
