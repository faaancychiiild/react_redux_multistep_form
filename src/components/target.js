import { useState } from 'react';
export const Target = () => {
  const default_state = {
    სახელი: "",
    გვარი: "",
    მეილი: ""
  }
  const [state, setState] = useState(default_state);
  return (
    <div className='target'>
      <label className="target-label" htmlFor="სახელი">სახელი</label>
      <input id="სახელი" key="სახელი" type="text" required={true} value={state.სახელი}></input>
      <label className="target-label" htmlFor="გვარი">გვარი</label>
      <input id="გვარი" key="გვარი" type="text" required={true} value={state.გვარი}></input>
      <label className="target-label" htmlFor="მეილი">მეილი</label>
      <input id="მეილი" key="მეილი" type="text" value={state.მეილი} required></input>
    </div>
  )
}
