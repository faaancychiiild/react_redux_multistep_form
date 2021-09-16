import Vector from '../assets/Vector.svg';
import {next} from '../redux_logic/action_creators';
import { useDispatch } from 'react-redux';
const Start = () => {
  const dispatch = useDispatch();
  const handle_start = (e) => {
    e.target.blur();
    dispatch(next());
  }
  return (
    <section className='start_section'>
      <div className='main_logo_div'>
        <img className='main_logo' alt='main_logo' src={Vector}/>
        <div className='ready_go' onClick={handle_start}><span>კითხვარის <br></br> დაწყება</span></div>
      </div>
    </section>
  );
}
export default Start;
