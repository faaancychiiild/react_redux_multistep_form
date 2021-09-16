import logo from '../assets/Group.png';
import React from 'react';
import { useSelector } from 'react-redux';
const Main_frame = (props) => {
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
    </section>
  )
}
export {Main_frame};
