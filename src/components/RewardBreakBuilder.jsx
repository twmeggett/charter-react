import { defaultBreaks } from "@/const"

export default function RewardBreakBuilder({breaks = defaultBreaks, setBreaks}) {
  const handleAddBreak = () => {
    const thresh = parseInt(prompt('Enter breakpoint threshold:'))
    const mult = parseFloat(prompt('Enter multiplier:'))
    if (isNaN(thresh)) {
      alert('Invalid threshold value')
      return
    }
    if (breaks.some(b => b.thresh === thresh)) {
      alert('Breakpoint with this threshold already exists')
      return
    }
    if (isNaN(mult)) {
      alert('Invalid multiplier value')
      return
    }
    if (!isNaN(thresh) && !isNaN(mult)) {
      setBreaks([...breaks, { thresh, mult }].sort((a, b) => a.thresh - b.thresh))
    }
  }

  const handleResetBreaks = () => setBreaks(defaultBreaks)

  const handleEditBreak = (t) => {
    const newMult = parseFloat(prompt('Edit multiplier:'))
    if (isNaN(newMult)) {
      alert('Invalid threshold value')
      return
    }
    
    setBreaks([...breaks.map(({thresh, mult}) => ({thresh, mult: thresh === t ? newMult : mult}))])
  }

  const createHandleRemoveBreak = (ind) => () => setBreaks(breaks.filter((_, i) => i !== ind))

  return (
    <>
      <h2>Reward Break Builder</h2>
      <button onClick={handleAddBreak}>Add Breakpoint</button>
      <button onClick={handleResetBreaks}>Reset to Default</button>

      {
        breaks.map(({thresh, mult}, i) => (
          <div key={thresh.toString()}>
            <p>Breakpoint: {thresh}</p>
            <p>Multiplier: {mult}</p>
            <button onClick={createHandleRemoveBreak(i)}>Remove</button> <button onClick={() => handleEditBreak(thresh)}>Edit Multiplier</button>
          </div>
        ))
      }
    </>
  )
}
