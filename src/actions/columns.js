export const SET_COLUMNS='SET_COLUMNS';
export const UPDATE_COLUMN='UPDATE_COLUMN';

export function setColumns(cols){
  return{
    type:SET_COLUMNS,
    columns:cols
  }
}

export function updateColumn(index, col){  
  return{
    type:UPDATE_COLUMN,
    index,
    col
  }
}
