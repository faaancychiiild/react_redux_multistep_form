import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { enable, disable } from '../redux_logic/action_creators';

export const Covid = ({covidState,  setCovidState}) => {
   const dispatch = useDispatch();
   const arr1 = ["კი", "არა", "ახლა მაქვს"];
   const arr2 = ["კი", "არა"];
   useEffect(() => {
      let [a,b,c,d,e] = Object.values(covidState);
      if((a==="კი" && b==="კი_i" && c && d) || (a==="კი" && b==="არა_i" && e)){
         dispatch(enable());
      }else{
         dispatch(disable());
      }
   }, [covidState, dispatch]);

//Let's handle all the nasty toggling between options accurately :D

   const handleChange = (e) => {
      if(e.target.id === 'test_date' || e.target.id === 'test_result'){
         setCovidState({...covidState, [e.target.id]: e.target.value, 'covid_date': ''});
      }
      if(e.target.id === 'covid_date'){
         setCovidState({...covidState, [e.target.id]: e.target.value, 'test_date': '', 'test_result': ''});
      }
   }
//Function for generating radio inputs easier

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
      {covidState.checked === 'კი' && AUTO_PRO(arr2, "ანტისხეულების ტესტი", 'ანტისხეულების ტესტი გაკეთებული გაქვს?*', 'checked_i', '_i')}
       {covidState.checked === 'კი' && covidState.checked_i === 'კი_i' && (
           <>
               <p className='question'>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
               <input value={covidState.test_date} className='custom-input' id='test_date' type='date' onChange={handleChange}></input><br></br>
               <input value={covidState.test_result} className='custom-input' id='test_result' type='number' onChange={handleChange}></input>
           </>
       )
      }
      {
         covidState.checked === 'კი' && covidState.checked_i === 'არა_i' && (
           <>
               <p className='question'>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
               <input value={covidState.covid_date} className='custom-input' id='covid_date' type='date' onChange={handleChange}></input><br></br>
           </>
       )
      }
     </div>
   </section>
   )
}
