import {SET_COLUMNS, UPDATE_COLUMN} from '../actions/columns';

const columns = (state=[], action)=>{  
  switch(action.type){
    case SET_COLUMNS:
      return action.columns;

    case UPDATE_COLUMN:
      let newArr = [...state];
      newArr[action.index]= action.col;

      return newArr;

    default:
      return state;
  }
}

export default columns;
