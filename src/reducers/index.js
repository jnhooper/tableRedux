import {combineReducers} from 'redux';
import elements from './elements';
import setElement from './setElement';
import setFilter from './sectionFilter';
import model from './model';
import columns from './columns';

const tableApp = combineReducers({
  element:setElement,
  sectionFilter:setFilter,
  model,
  columns
})

export default tableApp;
