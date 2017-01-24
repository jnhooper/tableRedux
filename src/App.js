import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addElement, changeElement} from './actions/elements';
import logo from './logo.svg';
import './App.css';
import QueryTable from './containers/QueryTable'
import {columns} from './setup'
import {setColumns, updateColumn} from './actions/columns';
import {getDescriptionUrl, descriptionQuery, extractDescription} from './getProperties';
import {ajax} from 'jquery';
import jsedn from './vendor/jsedn';
let options=[
  {
    name:"Al",
    value:"Al"
  },
  {
    name:'Ag',
    value:'Ag'
  }
];

// dispatch(setFilter((a)=>{console.log(a); return a;}))
// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

class App extends Component{

  componentDidMount(){
    let {setColumns, updateColumn} =this.props;
    setColumns(columns);
    let file_url;
    let file_urls={};
    let key;
    let i =0;
    for (let col of columns) {
      if(col.queryDescription!==undefined){
        let url = getDescriptionUrl(col.queryDescription.tag, col.queryDescription.key);
        console.log(url);
        if(file_urls[url]!==undefined){
          console.log(file_urls);
          file_urls[url] = [...file_urls[url], {index:i, key:col.queryDescription.key}]
        }else{
          file_urls[url] = [{index:i, key:col.queryDescription.key}]
        }      
        key=col.queryDescription.key;
      }
      i++;
    }
    console.log(file_urls)
    for(let url in file_urls){
      descriptionQuery(url, (data)=>{

        let urlObj = file_urls[url]

        for(let col of urlObj){

          let {key, index} = col;
          let desc = extractDescription(data, key);
          let column = Object.assign({},columns[index], {columnDescription:desc});

          updateColumn(index, column);
        }
      })
    }
  }

  render (){
    return(
    <div className="App">
      <QueryTable/>
  </div>
  )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({setColumns, updateColumn}, dispatch);
}
const mapStateToProps=()=>{
  return{}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
