import './App.css';
import Start from './components/start';
import {Header} from './components/header';
import prev from './assets/prev.png';
import next from './assets/next.png';
import { useSelector } from 'react-redux';

function App() {
  const page: any = useSelector((state: any) => state.page);
  console.log(page);
  return (
    <>
    {page===0 && <Start/>}
    {page > 0 && page < 6 && <Header/>}
    {
      page > 0 && <nav className='nav'>
      <button className='nav-left' key='prev'><img alt='previous' src={prev}/></button>
      <button className='nav-right' key='next' disabled={false}><img alt='next' src={next}/></button>
      </nav>
    }
    </>
  )
}
export default App;
