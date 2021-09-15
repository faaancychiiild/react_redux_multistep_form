import { createStore } from 'redux';

const initialState = {
  page: 0,
  next_enabled: true

}
const switchPage = (state = initialState, action: object | any) => {
  switch(action.type){
    case 'next':
      return {...state, page: state.page + 1 }
    case 'prev':
      return {...state, page: state.page - 1 }
    case 'enable_next':
      return {...state, next_enabled: true}
    case 'disable_next':
      return {...state, next_enabled: false}
    default:
      return state
  }
}
const store = createStore(switchPage);

export default store;
