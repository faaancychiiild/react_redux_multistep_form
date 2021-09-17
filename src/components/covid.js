export const Covid = ({covidState,  setCovidState}) => {
const arr1 = ["კი", "არა", "ახლა მაქვს"];
const arr2 = ["კი", "არა"];
const AUTO_PRO = (data, name, p_text, state, k) => {
  return (
    <>
    <p className='question'>{p_text}</p>
    {data.map((i) => {
      return (
        <label key={i + k}>
        <input className='radio-input' name={name} type="radio" id={i+k} onChange={
            (e) => setCovidState({...covidState, [state]: e.target.id})
        } checked={covidState[state] === i+k}/>
        {i}
        <br></br>
        </label>
      )
    })}
    </>
  )
}
  return (
    <section>
      <div className="radios">
        { AUTO_PRO(arr1, "გადატანილი", 'გაქვს გადატანილი Covid-19?*', 'checked', '') }
        {covidState.checked === 'კი' && AUTO_PRO(arr2, "ანტისხეულების ტესტი", 'ანტისხეულების ტესტი გაკეთებული გაქვს?', 'checked_i', '_i')}
      </div>
    </section>
  )
}
