export function computeRewards(transactionAmount, rewardBreaks) {
    const zeroRewardThresh = Math.min(...rewardBreaks.map(({thresh}) => thresh));

    if (transactionAmount < zeroRewardThresh) {return 0}

    const initialAcc = Math.trunc(transactionAmount) - zeroRewardThresh;

    const { points } = rewardBreaks.reduce(({acc, points}, {thresh, mult}, i) => {
      const hasNext = !!rewardBreaks[i + 1];
      const rewardableAcc = hasNext ? Math.min(acc, thresh) : acc;
      const newPoints = points + rewardableAcc * mult;
      const newAcc = Math.max(acc - rewardableAcc, 0);

      return ({acc: newAcc, points: newPoints});
    }, {acc: initialAcc, points: 0});

    return points;
  }
