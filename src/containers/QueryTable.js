import React from 'react';
import {connect} from 'react-redux';
import SectionedTable from '../components/SectionedTable';
// Section:{name, nameClick(), rows:[Rows]}
// Row:items:[Cells]
// Cell:{value,filter}

/*
special thanks to
http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
*/
let getValue=(o, s)=> {
    if(s==undefined){
        return "";
    }
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    let a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        let k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};

/**
* formats the cols into the propper format for the
* header row
**/
let formatHeader=(cols)=>{
  return cols.map(col=>{
    let result = {value:col.name};
    if(col.columnDescription){
      result.hover = col.columnDescription;
    }
    return result
  })
}
/**
* takes an object and an array of col objects
* see ../columns.js for the data structure
**/
let formatRow=(datum, cols)=>{
  let row=[];
  for(let col of cols){
    let value = getValue(datum, col.accessorString);
    if((value===undefined || value.length===0 )){
      if(col.default!==undefined){
        value = col.default;
      }
    }else if(col.format!==undefined){
      value = col.format(value);
    }
    row.push({
      value
    })
  }
  return row
}

let formatData =(data=[], columns=[])=>{
  let sectionHash={}
  let sections=[]

  for (let datum of data) {
    let name=datum['short-name']['source-value'][0];
    let row = formatRow(datum, columns);
    sectionHash[name]?sectionHash[name].push(row): sectionHash[name]=[row];
  }

  for(let section in sectionHash){
    sections.push({
      name:section,
      rows:sectionHash[section]
    });
  }

  return sections;
}

const mapStateToProps =({selectedElement}, {columns})=>{

  let data = selectedElement.data;
  data = formatData(data, columns);
  let headers = formatHeader(columns);

  return{
    sections:data,
    columns:headers
  }
};

const QueryTable = connect(mapStateToProps)(SectionedTable)
export default QueryTable;
