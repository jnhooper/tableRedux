import React from 'react';
import {connect} from 'react-redux';
import {ajax} from 'jquery';
import DropDown from '../components/DropDown'
import {addElement, changeElement} from '../actions/elements'
import queryCreator from '../queryCreator';
import '../css/QueryDropDown.css';

let secondQuery=(name, data)=>{
  return ajax({url:"https://query.openkim.org/api",
    dataType: 'json',
    type: 'POST',
    data: {
     "visualizer-id": "",
     "sort":"[[\"short-name.source-value\",1],[\"meta.subject.kimcode\",1]]",
     "query": "{\"meta.type\":\"tr\",\"property-id\":\"tag:staff@noreply.openkim.org,2014-05-21:property/elastic-constants-isothermal-cubic-crystal-npt\",\"meta.runner.kimcode\":{\"$regex\":\"^ElasticConstantsCubic.*\"},\"species.source-value\":{\"$all\":[\""+name+"\"],\"$not\":{\"$elemMatch\":{\"$nin\":[\""+name+"\"]}}}}",
     "fields": "{\"c11.si-value\":1,\"c12.si-value\":1,\"c44.si-value\":1,\"meta.subject.kimcode\":1,\"meta.runner.kimcode\":1,\"short-name.source-value\":\"1\"}",
     "database": "data"
    },
    // success:function(newData){
      // let _this = this;
      // newData.forEach(function(datum){
      //   let struct = datum["short-name"]["source-value"][0];
      //   let species = _this.data[name];
      //   _this.data[name].forEach(function(str, index){
      //     if(str.name===struct){
      //       let strData = str.data;
      //       str.data.forEach(function(d, dataIndex){
      //         if(d.meta.subject.kimcode===datum.meta.subject.kimcode){
      //           let c11={'si-value':datum.c11['si-value']*Math.pow(10,-9)}
      //           let c12={'si-value':datum.c12['si-value']*Math.pow(10,-9)}
      //           let c44={'si-value':datum.c44['si-value']*Math.pow(10,-9)}
      //           _this.data[name][index].data[dataIndex].c11= c11;
      //           _this.data[name][index].data[dataIndex].c12 = c12;
      //           _this.data[name][index].data[dataIndex].c44 = c44;
      //         }
      //       });
      //     }
      //   });
      // });
  // }
})};


let getQuery=(val)=>{
  return ajax({
    method:'POST',
    dataType:'json',
    url:"https://query.openkim.org/api",
    data:queryCreator(val)
  });
}


let QueryDropDown = ({options, elements=[], dispatch})=>{

  return(
    <div className="queryDropDown">
    <DropDown  options={options} onChange={(e)=>{
      let val = e.target.value;
      let filter= elements.filter(el=>{return el.id===val});
      console.log(filter, elements);
      if(filter.length===0){
        getQuery(val).then(data=>{
          secondQuery(val).then(newData=>{

            console.log("NEW DATA", newData);
            console.log(data)
            for(let datum of newData){
              for(let dat of data){
                if(dat.meta.subject.kimcode===datum.meta.subject.kimcode){
                  console.log("hey")
                  dat.c11 =datum.c11;
                  dat.c12=datum.c12;
                  dat.c44=datum.c44
                }
              }
            }
            console.log("hey")
            dispatch(addElement({id:val, data}));
            dispatch(changeElement({id:val, data}));
          })
          console.log(data);
        });
      }else{
        dispatch(changeElement(filter[0]));
      }
    }}/>
    </div>
  )
}

const mapStateToProps =({elements, selectedElement})=>{
  return{
    elements,
    selectedElement
  }
};


QueryDropDown = connect(mapStateToProps)(QueryDropDown);

export default QueryDropDown;
