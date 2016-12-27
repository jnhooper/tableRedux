import {SET_FILTER} from '../actions/setFilter';

const setFilter=(state=(a)=>(a), action)=>{
  switch(action.type){
    case SET_FILTER:
      return action.filter;
      break;
    default:
      return state;
  }
}

export default setFilter;
