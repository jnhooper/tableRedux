import {SELECT_ELEMENT} from '../actions/elements'

const selectElement = (state={}, action)=>{
  switch(action.type){
    case SELECT_ELEMENT:
      return action.element;
      break;
    default:
      return state;
      break;
  }
};

export default selectElement;
