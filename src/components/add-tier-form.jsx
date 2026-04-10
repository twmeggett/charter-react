import { useState, useContext } from "react";

import { RewardsDashboardContext } from "@/contexts/rewards-dashboard-context";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AddTierForm() {
  const [start, setStart] = useState('');
  const [mult, setMult] = useState('');
  const {addTier, resetTiers} = useContext(RewardsDashboardContext);

  const resetInputFields = () => {
    setStart('');
    setMult('');
  };

  const handleResetTiersClick = () => {
    resetInputFields();
    resetTiers();
  };

  const handleAddTier = () => {
    addTier(start, mult);
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
        <Button variant="outline" onClick={handleResetTiersClick}>Reset to Default</Button>
        <Button onClick={handleAddTier}>Submit</Button>
      </Field>
    </>
  )
}
