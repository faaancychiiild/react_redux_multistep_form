import { AUTO_PRO } from './covid';

export const Vacc = ({vaccState, setVaccState}) => {
   const arr1 = ["კი", "არა"];
   return (
      <div className='radios'>
         {AUTO_PRO(arr1, "აცრილი", 'უკვე აცრილი ხარ?*', 'checked', '', vaccState, setVaccState)}
      </div>
   )
}
