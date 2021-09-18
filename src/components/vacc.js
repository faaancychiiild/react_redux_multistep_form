import { AUTO_PRO } from './covid';

export const Vacc = ({vaccState, setVaccState}) => {
   const arr1 = ["კი", "არა"];
   const arr2 = ['პირველი დოზა და დარეგისტრირებული ვარ მეორეზე', 'სრულად აცრილი ვარ', 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'];
   const arr3 = ['დარეგისტრირებული ვარ და ველოდები რიცხვს', 'არ ვგეგმავ', 'გადატანილი მაქვს და ვგეგმავ აცრას'];
   return (
      <div className='radios'>
         {AUTO_PRO(arr1, "აცრილი", 'უკვე აცრილი ხარ?*', 'checked', '', vaccState, setVaccState)}
         {vaccState.checked === 'კი' && AUTO_PRO(arr2, 'ეტაპი', 'აირჩიე რა ეტაპზე ხარ*', 'checked_i', '', vaccState, setVaccState)}
         {vaccState.checked === 'არა' && AUTO_PRO(arr3, 'რას ელოდები', 'რას ელოდები?*', 'checked_ii', '', vaccState, setVaccState)}
         {vaccState.checked === 'კი' && vaccState.checked_i === arr2[2] &&
         <div className='book'>
         რომ არ გადადო, <br></br>
         ბარემ ახლავე დარეგისტრირდი<br></br>
         <a href='https://booking.moh.gov.ge/'>https://booking.moh.gov.ge/</a>
         </div>
         }
      </div>
   )
}
