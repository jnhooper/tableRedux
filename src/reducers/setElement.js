import {SET_ELEMENT} from '../actions/elements'

const setElement = (state={}, action)=>{
  switch(action.type){
    case SET_ELEMENT:
      return action.element;
      break;
    default:
      return state;
      break;
  }
};

export default setElement;
