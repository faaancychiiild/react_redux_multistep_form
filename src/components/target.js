import { useState, useEffect } from 'react';
import { enable, disable } from '../redux_logic/action_creators';
import { useDispatch } from 'react-redux';

// COMPONENT FOR IDENTIFICATION
export const Target = ({state, setState}) => {
  const dispatch = useDispatch();
  const regex = /^[a-zA-Zა-ჰ]{3,255}$/;
  const regex_email = /^[\w]+[\w-.]+@redberry.ge$/;
//We can listen to the state using effect hook as well as check for validation
  useEffect(() => {
    if(regex.test(state.სახელი) && regex.test(state.გვარი) && regex_email.test(state.მეილი)){
      dispatch(enable());
    }else{
      dispatch(disable());
    }
  }, [state]);

// We can combine all handlers into a single function as follows:
  const handleChange = (e) => {
    setState({...state, [e.target.id]: e.target.value});
  }
  return (
    <div className='target'>
      <label className="target-label required" htmlFor="სახელი">სახელი</label>
      <input className='text-input' id="სახელი" key="სახელი" type="text" value={state.სახელი || ""} onChange={handleChange}></input>
      <label className="target-label required" htmlFor="გვარი">გვარი</label>
      <input className='text-input' id="გვარი" key="გვარი" type="text" value={state.გვარი} onChange={handleChange}></input>
      <label className="target-label required" htmlFor="მეილი">მეილი</label>
      <input className='text-input' id="მეილი" key="მეილი" type="text" value={state.მეილი} onChange={handleChange}></input>
    </div>
  )
}
