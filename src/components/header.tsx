import logo from '../assets/Group.png';
import { useSelector } from 'react-redux';
const Header:React.FC = () => {
  const page: any = useSelector((state: any) => state.page);
  return (
    <section className='main_header'>
      <div className='logo-wrapper'>
        <img className='redberry' alt='redberry' src={logo}/>
      </div>
      <span className='progress'>{page}/4</span>
      <div className='line'></div>
    </section>
  )
}
export {Header};
