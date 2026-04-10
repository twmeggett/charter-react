export function computeRewards(transactionAmount, rewardTiers) {
  const tiers = rewardTiers.toSorted((a, b) => a.start - b.start); // ensure reward tiers are sorted by tier starting amount ascending
  const minTierStart = tiers[0]?.start || 0;

  if (transactionAmount < minTierStart) {return 0}

  const initialAcc = Math.ceil(transactionAmount) - minTierStart;

  const { points } = tiers.reduce(({acc, points}, {start, mult}, i) => {
    const hasNext = !!tiers[i + 1];
    const rewardableAcc = hasNext ? Math.min(acc, start) : acc; // if there's a higher tier, reward only the amount before the start of the next tier; otherwise, all remaining acc is rewardable
    const newPoints = points + Math.ceil(rewardableAcc * mult); // felt like being generous with the points, so I'm rounding up to the nearest whole number instead of rounding down or leaving as a float
    const newAcc = Math.max(acc - rewardableAcc, 0); // the new acc is the remaining amount above the current tier that hasn't been converted to points yet

    return ({acc: newAcc, points: newPoints});
  }, {acc: initialAcc, points: 0});

  return points;
}
