import {SELECT_MODEL} from '../actions/models'

const model = (state='', action)=>{
  switch (action.type){
    case SELECT_MODEL:
      return action.model;
      break;
    default:
      return state;
  }
}

export default model;
