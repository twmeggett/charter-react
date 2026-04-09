export function computeRewards(transactionAmount, rewardBreaks) {
  const tiers = [...rewardBreaks].sort((a, b) => a.thresh - b.thresh); // ensure reward breaks are sorted by thresh ascending
  const minThresh = tiers[0]?.thresh || 0;

  if (transactionAmount < minThresh) {return 0}

  const initialAcc = Math.trunc(transactionAmount) - minThresh;

  const { points } = rewardBreaks.reduce(({acc, points}, {thresh, mult}, i) => {
    const hasNext = !!rewardBreaks[i + 1];
    const rewardableAcc = hasNext ? Math.min(acc, thresh) : acc; // if there's a next breakpoint, only the amount up to the current thresh is rewardable; otherwise, all remaining acc is rewardable
    const newPoints = points + Math.ceil(rewardableAcc * mult); // felt like being generous with the points, so I'm rounding up to the nearest whole number instead of rounding down or leaving as a float
    const newAcc = Math.max(acc - rewardableAcc, 0); // the new acc is the remaining amount above the current thresh that hasn't been converted to points yet

    return ({acc: newAcc, points: newPoints});
  }, {acc: initialAcc, points: 0});

  return points;
}
