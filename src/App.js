import './App.css';
import Start from './components/start';
import {MAIN_FRAME} from './components/main_frame';
import asset_1 from './assets/scan.png';
import asset_2 from './assets/vaccinate.png';
import asset_3 from './assets/doctor.png';
import asset_4 from './assets/bike.png';
import { useSelector } from 'react-redux';
import { Target } from './components/target';
import { Covid } from './components/covid';
import { Vacc } from './components/vacc';
import { Comments } from './components/comments';
import { useState } from 'react';

const App = () => {
  const default_state = {
    სახელი: "name",
    გვარი: "surname",
    მეილი: "mail@redberry.ge"
   }
   const covid_default = {
    გადატანილი: '',
    ანტისხეულების_ტესტი: '',
    test_date: '',
    test_result: '',
    covid_date: ''
   }
  const vacc_default = {
    აცრილი: '',
    ეტაპი: '',
    რას_ელოდები: ''
   }
  const comments_default = {
    ონლაინ_შეხვედრები: '',
    ოფისიდან_მუშაობა: '',
    ფიზიკური_შეკრებები: '',
    გარემო: ''
  }
  const [state, setState] = useState(default_state);
  const [covidState,  setCovidState] = useState(covid_default);
  const [vaccState, setVaccState ] = useState(vacc_default);
  const [comments, setComments] = useState(comments_default);

  const page = useSelector((state) => state.page);
  const assets = ['', asset_1, asset_2, asset_3, asset_4];
  const submit_function = () => {
    console.log({...state, ...covidState, ...vaccState, ...comments});
  }
  return (
    <form className='form' onSubmit={(e) => {e.preventDefault(); console.log(e.target.elements)}}>
    {page === 0 && <Start/>}
    {page === 1 && <MAIN_FRAME component={<Target state={state} setState={setState}/>} img={assets[page]}/>}
    {page === 2 && <MAIN_FRAME component={<Covid covidState={covidState} setCovidState={setCovidState}/>} img={assets[page]}/>}
    {page === 3 && <MAIN_FRAME component={<Vacc vaccState={vaccState} setVaccState={setVaccState}/>} img={assets[page]}/>}
    {page === 4 && <MAIN_FRAME component={<Comments comments={comments} setComments={setComments} submit_function={submit_function} />} img={assets[page]}/>}
    </form>
  )
}
export default App;
