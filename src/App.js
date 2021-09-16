import './App.css';
import Start from './components/start';
import {Main_frame} from './components/main_frame';
import asset_1 from './assets/scan.png';
import asset_2 from './assets/vaccinate.png';
import { useSelector } from 'react-redux';
import { Target } from './components/target';
const App = () => {
  const page = useSelector((state) => state.page);
  const next_enabled = useSelector((state) => state['next_enabled']);
  const assets = ['', asset_1, asset_2];
  return (
    <>
    {page===0 && <Start/>}
    {page > 0 && page < 6 && <Main_frame component={<Target />} img={assets[page]}/>}
    </>
  )
}
export default App;
