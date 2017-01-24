import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SectionedTable from '../components/SectionedTable';
import {getURLParams, getValue, getQuery, zip} from '../util';
import {addElement, setElement} from '../actions/elements';
import {selectModel} from '../actions/models';
import {queries} from '../setup';
import {kimRequests} from '../queryCreator';
import {setColumns} from '../actions/columns';

const species = getURLParams('species');

// Section:{name, nameClick(), rows:[Rows]}
// Row:items:[Cells]
// Cell:{value,filter}

/*
special thanks to
http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
*/

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

//format data for the table
let formatData =(data=[], columns=[], model='')=>{
  let sectionHash={}
  let sections=[]

  for (let datum of data) {
    let name=datum['short-name']['source-value'][0];

    let highlight = (getValue(datum, 'meta.subject.kimcode')===model)

    let row = {
      data:formatRow(datum, columns),
      props:{highlight:highlight}
    };

    if(sectionHash[name]){
      if(highlight){
        sectionHash[name]=[row, ...sectionHash[name]]
      }else{
        sectionHash[name].push(row)
      }
    }else{
       sectionHash[name]=[row];}
  }

  for(let section in sectionHash){
    sections.push({
      name:section,
      rows:sectionHash[section]
    });
  }

  return sections;
}


let dataMerge = (first, second, key)=>{
  //not sure how when returns requests, can probably take this out but just to
  //be safe
  if(first.length<second.length){
    let temp = first;
    first = second;
    second = temp;
  }
  for(let datum of first){
    for(let dat of second){
      if(getValue(dat, key)===getValue(datum, key)){
        //TODO fix this so it doesnt mutate data
        datum.c11 =dat.c11;
        datum.c12=dat.c12;
        datum.c44=dat.c44
      }
    }
  }
  return first;
}

const mapStateToProps =({element={data:[]}, model='', columns=[]},)=>{
  let data = element.data;
  data = formatData(data, columns, model);
  return{
    sections:data,
    columns:columns
  }
};

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({selectModel, setElement}, dispatch);
}

class QueryTable extends Component{
  componentDidMount(){
    let {selectModel, setElement, columns} = this.props;

    selectModel(getURLParams("model"));
    kimRequests(
    //need to plug the species name into the queries
      queries.map(function(d){return d(species)}),
      (data)=>{
        setElement({
          name:species,
          data:dataMerge(...data, 'meta.subject.kimcode')
          }
        )
      }
    );
  }

  render(){
    let{sections, columns} = this.props;

    return (<SectionedTable sections={sections} columns={formatHeader(columns)}/>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryTable)
// export default QueryTable;
