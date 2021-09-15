import './App.css';
import Start from './components/start';
import {Header} from './components/header';
import prev_vector from './assets/prev.png';
import next_vector from './assets/next.png';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from './redux_logic/action_creators';
import { Target } from './components/target';
const App = () => {
  const dispatch = useDispatch();
  const { page, next_enabled } = useSelector((state) => state);
  return (
    <form>
    {page===0 && <Start/>}
    {page > 0 && page < 6 && <Header />}
    {
      page > 0 && <nav className='nav'>
      <button onClick={() => dispatch(prev())} className='nav-left' key='prev' disabled={!next_enabled}><img alt='previous' src={prev_vector}/></button>
      <button onClick={() => dispatch(next())} className='nav-right' key='next' disabled={!next_enabled}><img alt='next' src={next_vector}/></button>
      </nav>
    }
    </form>
  )
}
export default App;
