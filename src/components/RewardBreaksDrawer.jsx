import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import RewardBreakCard from "./RewardBreakCard";
import { defaultBreaks } from "@/const";

export default function RewardBreaksDrawer({breaks, setBreaks}) {
  const [thresh, setThresh] = useState('');
  const [mult, setMult] = useState('');


  const resetInputFields = () => {
    setThresh('');
    setMult('');
  }

  const handleAddBreak = () => {
    if (breaks.some(b => b.thresh === thresh)) {
      return toast.error("A breakpoint with that threshold already exists");
    }

    if (isNaN(thresh) || isNaN(mult) || thresh <= 0 || mult <= 0) {
      console.log({thresh, mult})
      return toast.warning("Please enter valid numbers for threshold and multiplier");
    }

    if (breaks.length >= 5) {
      return toast.error("I think 5 is quite enough breapoints for anyone to manage, don't you? ;-)");
    }

    const newUUID = () => Math.random().toString(36).substring(2, 9); // generate a random string as a simple unique ID
    setBreaks(prev => [...prev, { id: newUUID(), thresh, mult }].sort((a, b) => a.thresh - b.thresh));
    resetInputFields();
  }

  const handleResetBreaks = () => {
    resetInputFields();
    setBreaks(defaultBreaks);
  }

  const handleRemoveBreak = (id) => setBreaks(prev => prev.filter(b => b.id !== id));

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Reward Breakpoints</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Reward Breakpoints</DrawerTitle>
          <DrawerDescription>Add a breakpoint</DrawerDescription>
          <FieldGroup className="my-3">
            <div className="flex gap-1">
              <Field>
                <FieldLabel htmlFor="fieldgroup-threshold">Threshold</FieldLabel>
                <Input
                  id="fieldgroup-threshold"
                  type="number"
                  value={thresh}
                  onChange={(e) => setThresh(parseFloat(e.target.value))} />
              </Field>
              <Field>
                <FieldLabel htmlFor="fieldgroup-mult">Multiplier</FieldLabel>
                <Input
                  id="fieldgroup-mult"
                  type="number"
                  value={mult}
                  onChange={(e) => setMult(parseFloat(e.target.value))} />
              </Field>
            </div>
          </FieldGroup>
          <Field orientation="horizontal">
            <Button variant="outline" onClick={handleResetBreaks}>Reset to Default</Button>
            <Button onClick={handleAddBreak}>Submit</Button>
          </Field>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          {
            breaks.map(b => (
                <div key={b.id} className="my-3">
                  <RewardBreakCard breakpoint={b} onDelete={() => handleRemoveBreak(b.id)} />
                </div>
            ))
          }
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
