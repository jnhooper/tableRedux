export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SET_ELEMENT = 'SET_ELEMENT';

export function addElement (element){
  return {
    type:ADD_ELEMENT,
    element};
}

export function setElement(element){
  return {
  type:SET_ELEMENT,
  element};
}
