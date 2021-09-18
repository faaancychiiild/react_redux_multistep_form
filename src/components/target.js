import { useEffect, useState, useMemo } from 'react';
import { enable, disable } from '../redux_logic/action_creators';
import { useDispatch } from 'react-redux';

// COMPONENT FOR IDENTIFICATION
export const Target = ({state, setState}) => {
  const dispatch = useDispatch();
  const regex = useMemo(() => /^[a-zA-Zა-ჰ]{3,255}$/, []);
  const regex_email = useMemo(() => /^[\w]+[\w-.]+@redberry.ge$/, []);
//We can listen to the state using effect hook as well as check for validation
  useEffect(() => {
    if(regex.test(state.სახელი) && regex.test(state.გვარი) && regex_email.test(state.მეილი)){
      dispatch(enable());
    }else{
      dispatch(disable());
    }
  }, [state, dispatch, regex_email, regex]);

//INPUT VALIDATION SPECIFICS
   let defaultError = {სახელი: '', გვარი: '', მეილი: ''}
   const [error, setError] = useState(defaultError);

// We can combine all handlers into a single function as follows:
  const handleChange = (e) => {
    setState({...state, [e.target.id]: e.target.value});
    if(e.target.id !== 'მეილი' && !regex.test(e.target.value)){
// HERE: remember '' < 3 returns true; The right order makes everything work fine:
      let val = e.target.value;
      let id = e.target.id;
      val.length < 3 && setError({...error, [id]: `${id}ს ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან`});
      val === '' && setError({...error, [id]: `${id}ს ველის შევსება სავალდებულოა`});
      val.length > 255 && setError({...error, [id]: `${id}ს ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოგან`});
      val.length > 2 && setError({...error, [id]: `${id}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`});
    }
  }
  return (
    <div className='target'>
      <label className="target-label required" htmlFor="სახელი">სახელი</label>
      <input className='text-input' id="სახელი" key="სახელი" type="text" value={state.სახელი || ""} onChange={handleChange}></input>
      <span className='error-span'>{error.სახელი}</span>
      <label className="target-label required" htmlFor="გვარი">გვარი</label>
      <input className='text-input' id="გვარი" key="გვარი" type="text" value={state.გვარი} onChange={handleChange}></input>
      <span className='error-span'>{error.გვარი}</span>
      <label className="target-label required" htmlFor="მეილი">მეილი</label>
      <input className='text-input' id="მეილი" key="მეილი" type="text" value={state.მეილი} onChange={handleChange}></input>
      <span className='error-span'>{error.მეილი}</span>
    </div>
  )
}
