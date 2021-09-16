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
        <img alt='main_logo' src={Vector} className='main_logo'/>
        <div onClick={handle_start}><span className='start_p'>კითხვარის <br></br> დაწყება</span></div>
      </div>
    </section>
  );
}
export default Start;
