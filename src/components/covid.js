import { useState } from 'react';

export const Covid = () => {
  const [covidState,  setCovidState] = useState({checked: "yes"});
  return (
    <>
      <input name="გადატანილი" type="radio" id="yes" checked={covidState.checked === "yes"}/>
      <label htmlFor="yes">კი</label>
      <input name="გადატანილი" type="radio" id="no" checked={covidState.checked === "no"}/>
      <label htmlFor="no">არა</label>
      <input name="გადატანილი" type="radio" id="now" checked={covidState.checked === "now"}/>
      <label htmlFor="now">ეხლა მაქვს</label>
    </>
  )
}
