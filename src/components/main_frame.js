import logo from '../assets/Group.png';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from '../redux_logic/action_creators';

const Main_frame = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  return (
    <section className='main_frame'>
      <div className='logo-wrapper'>
        <img alt='redberry' src={logo}/>
        <span>{page}/4</span>
      </div>
      <div className='content-wrapper'>
      {props.component}
      <img className='logo-styles' alt='logo_asset' src={props.img}/>
      </div>
      <nav className='nav-wrapper'>
        {page !== 1 && <button className='nav-button' onClick={(e) => {e.preventDefault(); dispatch(prev())}}><i className="fa fa-angle-left"></i></button>}
        {page !== 4 && <button className='nav-button' onClick={(e) => {e.preventDefault(); dispatch(next())}}><i className="fa fa-angle-right"></i></button>}
      </nav>
    </section>
  )
}
export {Main_frame};
