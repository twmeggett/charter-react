import { expect, test } from 'vitest';
import { computeQtrTotals } from './computeQtrTotals';

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

test('compute computeQtrTotals(mockTransactions, mockBreakpoints1) { Jan: {amount: 175, rewards: 95}, Feb: {amount: 100, rewards: 30}, Mar: {amount: 150, rewards: 150} }', () => {
  expect(computeQtrTotals(mockTransactions, mockBreakpoints1)).toEqual(
    { 
      Jan: {amount: 175, rewards: 95},
      Feb: {amount: 100, rewards: 30},
      Mar: {amount: 150, rewards: 150}
    });
})
