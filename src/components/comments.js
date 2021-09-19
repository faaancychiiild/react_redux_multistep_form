import {AUTO_PRO} from './covid';
import { useState } from 'react';
import heart from '../assets/heart.png';
import { useDispatch } from 'react-redux';
import { next } from '../redux_logic/action_creators';

export const Comments = ({comments, setComments, submit_function}) => {
  let arr1 = ['კვირაში ორჯერ', 'კვირაში ერთხელ', 'ორ კვირაში ერთხელ', 'თვეში ერთხელ'];
  let arr2 = ['0', '1', '2', '3', '4', '5'];
  let [error1, setError1] = useState('');
  let [error2, setError2] = useState('');

  const dispatch = useDispatch();
  const handler_func = () => {
    if(comments.ონლაინ_შეხვედრები === ''){
      setError1('ამ ველის შევსება სავალდებულოა')
    }else if(comments.ოფისიდან_მუშაობა === ''){
      setError2('ამ ველის შევსება სავალდებულოა')
    }else {
      submit_function();
      dispatch(next());
    }
  }
  return (
    <>
    <div className='radios'>
      <p className='intro'>
       რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
      თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.<br></br><br></br>
      პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
      {
        AUTO_PRO(arr1, 'ონლაინ_შეხვედრები', 'რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*', 'ონლაინ_შეხვედრები', comments, setComments)
      }
      <span className='error-span'>{error1}</span>
      {
        AUTO_PRO(arr2, 'ოფისიდან_მუშაობა', 'კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*', 'ოფისიდან_მუშაობა', comments, setComments)
      }
      <span className='error-span'>{error2}</span>
      <p className='question'>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
      <textarea value={comments.ფიზიკური_შეკრებები} onChange={(e) => setComments({...comments, ფიზიკური_შეკრებები: e.target.value})}></textarea>
      <p className='question'>რას ფიქრობ არსებულ გარემოზე: <br></br>
        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
      </p>
      <textarea value={comments.გარემო} onChange={(e) => setComments({...comments, გარემო: e.target.value})}></textarea>
      <button className='submit' type='button' onClick={() => handler_func()}>დასრულება</button>
    </div>
    <img className='heart' src={heart} alt='heart shape'></img>
    </>
  )
}
