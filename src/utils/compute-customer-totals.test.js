import { expect, test } from 'vitest';
import { computeCustomerTotals } from './compute-customer-totals';

const mockTotalsByMonth = {
  "0": {
    "customer1": {
      amount: 175,
      rewards: 95
    },
    "customer2": {
      amount: 0,
      rewards: 0
    }
  },
  "1": {
    "customer1": {
      amount: 100,
      rewards: 30
    },
    "customer2": {
      amount: 20,
      rewards: 0
    }
  },
  "2": {
    "customer1": {
      amount: 150,
      rewards: 150
    },
    "customer2": {
      amount: 200,
      rewards: 250
    }
  }
};

test('compute computeCustomerTotals(mockTotalsByMonth)', () => {
  expect(computeCustomerTotals(mockTotalsByMonth)).toEqual(
    {
      "customer1": {
        amount: 425,
        rewards: 275
      },
      "customer2": {
        amount: 220,
        rewards: 250
      }
    }
  );
});
