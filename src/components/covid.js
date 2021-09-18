import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { enable, disable } from '../redux_logic/action_creators';

//Function for generating radio inputs easier. We can use this function within
//other modules too

export const AUTO_PRO = (data, name, p_text, state, stateObj, setStateObj) => {
   return (
   <>
   <p className='question'>{p_text}</p>
   {data.map((i) => {
     return (
      <label key={i}>
      <input className='radio-input' name={name} type="radio" id={i} onChange={
         (e) => setStateObj({...stateObj, [state]: e.target.id})
      } checked={stateObj[state] === i}/>
      {i}
      <br></br>
      </label>
     )
   })}
   </>
   )
}
export const Covid = ({covidState,  setCovidState}) => {
   const dispatch = useDispatch();
   const arr1 = ["კი", "არა", "ახლა მაქვს"];
   const arr2 = ["კი", "არა"];
   useEffect(() => {
      let [a,b,c,d,e] = Object.values(covidState);
      if(a==="არა" || a==="ახლა მაქვს" || (a==="კი" && b==="კი" && c && d) || (a==="კი" && b==="არა" && e)){
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

   return (
     <div className="radios">
      { AUTO_PRO(arr1, "გადატანილი", 'გაქვს გადატანილი Covid-19?*', 'გადატანილი', covidState, setCovidState) }
      {covidState.გადატანილი === 'კი' && AUTO_PRO(arr2, "ანტისხეულების ტესტი", 'ანტისხეულების ტესტი გაკეთებული გაქვს?*', 'ანტისხეულების_ტესტი', covidState, setCovidState)}
       {covidState.გადატანილი === 'კი' && covidState.ანტისხეულების_ტესტი === 'კი' && (
           <>
               <p className='question'>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</p>
               <input value={covidState.test_date} className='custom-input' id='test_date' type='date' onChange={handleChange}></input><br></br>
               <input value={covidState.test_result} className='custom-input' id='test_result' type='number' onChange={handleChange}></input>
           </>
       )
      }
      {
         covidState.გადატანილი === 'კი' && covidState.ანტისხეულების_ტესტი === 'არა' && (
           <>
               <p className='question'>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</p>
               <input value={covidState.covid_date} className='custom-input' id='covid_date' type='date' onChange={handleChange}></input><br></br>
           </>
       )
      }
     </div>
   )
}
