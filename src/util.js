import {ajax} from 'jquery'
import queryCreator from './queryCreator';

//////////////////////////////////////////////////////////////////////////////////////
//getURLParams
//////////////////////////////////////////////////////////////////////////////////////
//this is just a helper function to pull the params out of the URL string. should not
//be modified
export function getURLParams (sParam){
  let sPageURL = window.location.search.substring(1);
  let sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
      let sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
          return sParameterName[1];
      }
  }
};

export function getValue(o, s) {
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

export function getQuery(val){
  return ajax({
    method:'POST',
    dataType:'json',
    url:"https://query.openkim.org/api",
    data:queryCreator(val)
  });
}

export function zip(arrays=[], key){
  let dataHash = {};
  console.log(arrays, key);
  let u = 0
  let e=0
  for (let array of arrays){
    for (let datum of array){

      let myKey = getValue(datum, key);

      if (dataHash[myKey]===undefined){
        dataHash[myKey] = Object.assign({},datum);
        u++;
      }else{
        dataHash[myKey]=Object.assign({}, dataHash[myKey], datum)
        e++
      }
    }
  }

  console.log(u,e);
  let result = [];
  let count =0;

  for (let dh in dataHash){
    count++;
    if(dataHash[dh].c11!==undefined){
      console.log(dataHash[dh])
    }
    result = [...result,dataHash[dh]];
  }
  console.log(result, count);
  return result;
}
