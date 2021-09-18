import { AUTO_PRO } from './covid';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { enable, disable } from '../redux_logic/action_creators';

export const Vacc = ({vaccState, setVaccState}) => {
   const arr1 = ["კი", "არა"];
   const arr2 = ['პირველი დოზა და დარეგისტრირებული ვარ მეორეზე', 'სრულად აცრილი ვარ', 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'];
   const arr3 = ['დარეგისტრირებული ვარ და ველოდები თარიღს', 'არ ვგეგმავ', 'გადატანილი მაქვს და ვგეგმავ აცრას'];
   const dispatch = useDispatch();
   useEffect(() => {
    if((vaccState.აცრილი && vaccState.ეტაპი) || (vaccState.აცრილი && vaccState.რას_ელოდები)){
      dispatch(enable());
    }else{
      dispatch(disable());
    }
  }, [vaccState, dispatch])
   return (
      <div className='radios'>
         {AUTO_PRO(arr1, "აცრილი", 'უკვე აცრილი ხარ?*', 'აცრილი', vaccState, setVaccState)}
         {vaccState.აცრილი === 'კი' && AUTO_PRO(arr2, 'ეტაპი', 'აირჩიე რა ეტაპზე ხარ*', 'ეტაპი', vaccState, setVaccState)}
         {vaccState.აცრილი === 'არა' && AUTO_PRO(arr3, 'რას ელოდები', 'რას ელოდები?*', 'რას_ელოდები', vaccState, setVaccState)}
         {vaccState.აცრილი === 'კი' && vaccState.ეტაპი === arr2[2] &&
         <div className='book'>
         რომ არ გადადო, <br></br>
         ბარემ ახლავე დარეგისტრირდი<br></br>
         <a target='_blank' rel="noreferrer" href='https://booking.moh.gov.ge'>👉 https://booking.moh.gov.ge/</a>
         </div>
         }
         {vaccState.აცრილი === 'არა' && vaccState.რას_ელოდები === arr3[1] &&
         <div className='book'>
         <a target='_blank' rel="noreferrer" href='https://booking.moh.gov.ge'>👉 https://booking.moh.gov.ge/</a>
         </div>
         }
         {vaccState.აცრილი === 'არა' && vaccState.რას_ელოდები === arr3[2] &&
         <div className='book'>
         ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  <br></br><br></br>👉 რეგისტრაციის ბმული<br></br>
         <a target='_blank' rel="noreferrer" href='https://booking.moh.gov.ge'>https://booking.moh.gov.ge/</a>
         </div>
         }
      </div>
   )
}
