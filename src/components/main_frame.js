import logo from '../assets/Group.png';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev, disable } from '../redux_logic/action_creators';

const MAIN_FRAME = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const next_enabled = useSelector((state) => state['next_enabled']);
  return (
    <section className='main_frame'>
      <div className='logo-wrapper'>
        <img className='redberry_label' alt='redberry' src={logo}/>
        <span>{page}/4</span>
      </div>
      <div className='content-wrapper'>
      {props.component}
      <img className='logo-styles' alt='logo_asset' src={props.img}/>
      </div>
      <nav className='nav-wrapper'>
        {page !== 1 && <button className='nav-button' onClick={(e) => {e.preventDefault(); dispatch(prev())}}><i className="fa fa-angle-left"></i></button>}
        {page !== 4 && <button type='submit' className='nav-button' onClick={(e) => {e.preventDefault(); dispatch(disable()); dispatch(next())}} disabled={!next_enabled}><i className="fa fa-angle-right"></i></button>}
      </nav>
    </section>
  )
}
export {MAIN_FRAME};
