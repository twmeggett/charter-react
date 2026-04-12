import { Toaster } from "@/components/ui/sonner";

import { RewardsGraph } from "@/components/rewards-graph";
import { TransactionsTable } from "@/components/transactions-table";
import { LoadingSpinner } from "@/components/loading-spinner";
import { RewardTiersDrawer } from "@/components/reward-tiers-drawer";
import { useCustomerRewardsDashboard } from "@/pages/customer-rewards-dashboard/use-customer-rewards-dashboard";

export function CustomerRewardsDashboard() {
  const {loading, error, monthlyTotals, customerTotals} = useCustomerRewardsDashboard();

  const errorTemplate = (
    <div className="text-center text-red-500">
      Error loading transactions: {error.message}
    </div>
  );

  const contentTemplate = (
    <>
    {
      error.message ? errorTemplate : (
        <>
          <RewardsGraph customerTotals={customerTotals} />
          <div className="md:h-150 overflow-y-scroll">
            <TransactionsTable
              monthlyTotals={monthlyTotals}
            />
          </div>
        </>
      )
    }
    </>
  );

  return (
    <div className="flex flex-col min-h-screen sm:px-2 md:px-5 lg:max-w-5xl mx-auto">
      <div>
        <h1>Customer Totals and Rewards By Quarter</h1>
        <RewardTiersDrawer />
      </div>
      <main className="flex flex-col flex-1 justify-around">
        {
          loading ? <LoadingSpinner /> : contentTemplate
        }
      </main>
      <Toaster position="top-center" />
    </div>
  )
}
