import logo from '../assets/Group.png';
const Header:React.FC = () => {
  return (
    <section className='main_header'>
      <div className='logo-wrapper'>
        <img className='redberry' alt='redberry' src={logo}/>
      </div>
      <span className='progress'>{1}/4</span>
      <div className='line'></div>
    </section>
  )
}
export {Header};
