import {ajax} from 'jquery';
import jsedn from './vendor/jsedn'

export function getDescriptionUrl(prop_id){
  const RE_PROPERTY_ID = new RegExp("^tag:([A-Za-z]+)@([A-Za-z.]+),([0-9]{4}\-[0-9]{2}\-[0-9]{2}):property/([A-Za-z-]+)$",'g');
  // prop_id = "tag:staff@noreply.openkim.org,2014-04-15:property/cohesive-potential-energy-cubic-crystal"
  // key = 'a';
  let [full, contributor, domain, date, short_name] = RE_PROPERTY_ID.exec(prop_id);
  let file_url = "https://raw.githubusercontent.com/openkim/openkim-properties/master/properties"


  file_url += '/'+short_name;

  file_url += '/'+date+'-'+contributor+'@'+domain;

  file_url += '/'+short_name+'.edn';

  let result;
  // return ()=>{
  //   function callback(){
  //
  //   }
    //   ajax(file_url).done(function(data){
    //     let obj = Object.assign({},jsedn.toJS(jsedn.parse(data)));
    //     let key_dict = obj[key];
    //     let description = key_dict['description'];
    //     console.log(obj);
    // });
  // }()
  return file_url;
}

export function descriptionQuery(file_url, callback){
  ajax(file_url).done(function(data){
    let obj = Object.assign({},jsedn.toJS(jsedn.parse(data)));
    callback(obj);
  })
}

export function extractDescription(dataObj, key){
  console.log(dataObj)
  let key_dict = dataObj[key];
  return key_dict['description'];
}
