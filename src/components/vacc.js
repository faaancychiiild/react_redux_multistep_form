import { AUTO_PRO } from './covid';

export const Vacc = ({vaccState, setVaccState}) => {
   const arr1 = ["კი", "არა"];
   const arr2 = ['პირველი დოზა და დარეგისტრირებული ვარ მეორეზე', 'სრულად აცრილი ვარ', 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'];
   const arr3 = ['დარეგისტრირებული ვარ და ველოდები თარიღს', 'არ ვგეგმავ', 'გადატანილი მაქვს და ვგეგმავ აცრას'];
   return (
      <div className='radios'>
         {AUTO_PRO(arr1, "აცრილი", 'უკვე აცრილი ხარ?*', 'checked', '', vaccState, setVaccState)}
         {vaccState.checked === 'კი' && AUTO_PRO(arr2, 'ეტაპი', 'აირჩიე რა ეტაპზე ხარ*', 'checked_i', '', vaccState, setVaccState)}
         {vaccState.checked === 'არა' && AUTO_PRO(arr3, 'რას ელოდები', 'რას ელოდები?*', 'checked_ii', '', vaccState, setVaccState)}
         {vaccState.checked === 'კი' && vaccState.checked_i === arr2[2] &&
         <div className='book'>
         რომ არ გადადო, <br></br>
         ბარემ ახლავე დარეგისტრირდი<br></br>
         <a target='_blank' href='https://booking.moh.gov.ge'>👉 https://booking.moh.gov.ge/</a>
         </div>
         }
         {vaccState.checked === 'არა' && vaccState.checked_ii === arr3[1] &&
         <div className='book'>
         <a target='_blank' href='https://booking.moh.gov.ge'>👉 https://booking.moh.gov.ge/</a>
         </div>
         }
         {vaccState.checked === 'არა' && vaccState.checked_ii === arr3[2] &&
         <div className='book'>
         ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  <br></br><br></br>👉 რეგისტრაციის ბმული<br></br>
         <a target='_blank' href='https://booking.moh.gov.ge'>https://booking.moh.gov.ge/</a>
         </div>
         }
      </div>
   )
}
