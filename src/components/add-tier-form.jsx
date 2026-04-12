import { useState, useContext } from "react";
import { toast } from "sonner";

import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RewardsDispatchContext, RewardsStateContext } from "@/contexts/rewards-context";
import { addTier, resetTiers } from "@/reducers/rewards-reducer";

export function AddTierForm() {
  const [start, setStart] = useState('');
  const [mult, setMult] = useState('');
  const { tiers } = useContext(RewardsStateContext);
  const dispatch = useContext(RewardsDispatchContext);

  const resetInputFields = () => {
    setStart('');
    setMult('');
  };

  const handleResetTiers = () => {
    resetInputFields();
    dispatch(resetTiers());
  };

  const handleAddTier = () => {
    if (tiers.some(b => b.start === start)) {
      return toast.error("A tier with that starting amount already exists");
    }

    if (isNaN(start) || isNaN(mult) || start <= 0 || mult <= 0) {
      return toast.warning("Please enter valid numbers for tier starting amounts and multiplier");
    }

    if (tiers.length >= 5) {
      return toast.error("I think 5 is quite enough tiers for anyone to manage, don't you? ;-)");
    }

    const newUUID = () => Math.random().toString(36).substring(2, 9); // generate a random string as a simple unique ID
    dispatch(addTier({ id: newUUID(), start, mult }))
    resetInputFields();
  };

  return (
    <>
      <FieldGroup className="my-3">
        <div className="flex gap-1">
          <Field>
            <FieldLabel htmlFor="fieldgroup-tier-start">Tier Amount</FieldLabel>
            <Input
              id="fieldgroup-tier-start"
              type="number"
              value={start}
              onChange={(e) => setStart(parseFloat(e.target.value))} />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-mult">Reward Multiplier</FieldLabel>
            <Input
              id="fieldgroup-mult"
              type="number"
              value={mult}
              onChange={(e) => setMult(parseFloat(e.target.value))} />
          </Field>
        </div>
      </FieldGroup>
      <Field orientation="horizontal">
        <Button variant="outline" onClick={handleResetTiers}>Reset to Default</Button>
        <Button onClick={handleAddTier}>Submit</Button>
      </Field>
    </>
  )
}
