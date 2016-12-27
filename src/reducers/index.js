import {combineReducers} from 'redux';
import elements from './elements';
import selectElement from './selectElement';
import setFilter from './sectionFilter';

const tableApp = combineReducers({
  elements,
  selectedElement:selectElement,
  sectionFilter:setFilter
})

export default tableApp;
