import React from 'react';
import logo from './logo.svg';
import './App.css';
import QueryDropDown from './containers/QueryDropDown'
import QueryTable from './containers/QueryTable'
import columns from './columns'
import {setFilter} from './actions/setFilter';

// let name = 'Al'
// ajax({
//   method:'POST',
//   dataType:'json',
//   url:"https://query.openkim.org/api",
//   data:{
//     "visualizer-id": "",
//     "sort":"[[\"short-name.source-value\",1],[\"meta.subject.kimcode\",1]]",
//      "query": "{\"meta.type\":\"tr\",\"property-id\":\"tag:staff@noreply.openkim.org,2014-04-15:property/cohesive-potential-energy-cubic-crystal\",\"meta.runner.kimcode\":{\"$regex\":\"^LatticeConstantCubicEnergy_.*\"},\"species.source-value\":{\"$all\":[\""+name+"\"],\"$not\":{\"$elemMatch\":{\"$nin\":[\""+name+"\"]}}}}",
//      "fields": "{\"a.si-value\":1,\"cohesive-potential-energy.si-value\":1,\"meta.subject.kimcode\":1,\"meta.runner.kimcode\":1,\"short-name.source-value\":1}",
//      "database": "data"
//    }
//  })
// .then((data)=>{console.log(data)})
// .catch((e)=>console.warn(e));

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

const cols = [
  {
    name:'Model',
    accessor:'meta.subject.kimcode'
  }
]
// dispatch(setFilter((a)=>{console.log(a); return a;}))
// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

const App=()=>(
  <div className="App">
    <QueryDropDown options={options}/>
    <QueryTable columns={columns}/>
  </div>
)
export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
