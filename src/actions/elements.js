export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SELECT_ELEMENT = 'SELECT_ELEMENT';

export function addElement (element){  
  return {
    type:ADD_ELEMENT,
    element};
}

export function changeElement(element){
  return {
  type:SELECT_ELEMENT,
  element};
}
