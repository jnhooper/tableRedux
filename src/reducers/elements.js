import {combineReducers} from 'redux'
import {ADD_ELEMENT, CHANGE_ELEMENT} from '../actions/elements'
const elements = (state=[], action)=>{  
  switch(action.type){
    case ADD_ELEMENT:
      return [...state,
        action.element];
      break;
    default:
      return state;
  }
};

export default elements;
