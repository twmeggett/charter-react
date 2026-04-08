import { useState, useEffect } from "react";

import RewardBreakBuilder from '@components/RewardBreakBuilder';
import { defaultBreaks } from "@/const"
import customerData from '../customer-data.json';

import { computeQtrTotals } from "./utils/computeQtrTotals";
import RewardsDisplay from "./components/RewardsDisplay";

function App() {
  const [breaks, setBreaks] = useState(defaultBreaks);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [qtrTotals, setQtrTotals] = useState({});

  useEffect(() => { // simulate loading data from an API
    setTimeout(() => {
      setTransactions(customerData.transactions);
      setLoading(false);
    }, 2000)
  }, [])

  useEffect(() => { // recompute totals whenever transactions or reward breaks change
    setQtrTotals(computeQtrTotals(transactions, breaks))
  }, [transactions, breaks])

  return (
    <div>
      <h1>Customer Rewards</h1>

      <RewardBreakBuilder breaks={breaks} setBreaks={setBreaks} />

      <hr />

      {
        loading ? <p>Loading...</p> : <RewardsDisplay qtrTotals={qtrTotals} />
      }
    </div>
  )
}

export default App
