export const Covid = ({covidState,  setCovidState}) => {
const arr1 = ["კი", "არა", "ეხლა მაქვს"];

const AUTO_PRO = (inputs, name, input_class, label_class, p_text) => {
  return (
    <>
    <p className='question'>{p_text}</p>
    {inputs.map((i) => {
      return (
        <>
        <input className={input_class} name={name} type="radio" id={i} onChange={(e) => setCovidState({...covidState, checked: e.target.id})} checked={covidState.checked === i}/>
        <label className={label_class} htmlFor={i}>{i}</label><br></br>
        </>
      )
    })}
    </>
  )
}
  return (
    <section>
      <div className="radios">
        { AUTO_PRO(arr1, "გადატანილი", 'radio-input', 'radio-label', 'გაქვს გადატანილი Covid-19?*') }
      </div>
    </section>
  )
}
