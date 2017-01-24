import {ajax} from 'jquery';
// import {getProperties} from './getProperties';
// ajax('https://raw.githubusercontent.com/openkim/openkim-properties/master/properties/structure-cubic-crystal-npt/2014-04-15-staff%40noreply.openkim.org/structure-cubic-crystal-npt.edn#')
// .then(data=>{console.log(data)});
export const columns=[
{
  name:'Model',
  accessorString:'meta.subject.kimcode',
  columnDescription:"Extended KIM ID of the interatomic potential or force field."
},
{
  name:'Lattice Constant [Å]',
  accessorString:'a.si-value',
  format:(data)=>{return data*Math.pow(10,10);},
  queryDescription:{
    tag:"tag:staff@noreply.openkim.org,2014-04-15:property/structure-cubic-crystal-npt",
    key:'a'
  }
  // columnDescription: getProperties("tag:staff@noreply.openkim.org,2014-04-15:property/structure-cubic-crystal-npt", "a")
  // columnDescription:"Average equilibrium conventional lattice constant of the cubic crystal."
},
{
  name:'Cohesive Energy [eV]',
  accessorString:'cohesive-potential-energy.si-value',
  format:(data)=>{return data*(6.2415093433*Math.pow(10,18));},
  queryDescription:{
    tag:"tag:staff@noreply.openkim.org,2014-04-15:property/cohesive-potential-energy-cubic-crystal",
    key:'cohesive-potential-energy'
  }
},
{
  name:'c11 [GPa]',
  accessorString:'c11.si-value',
  default:'N/A',
  format:(data)=>{return data*Math.pow(10,-9);},
  queryDescription:{
    tag:"tag:staff@noreply.openkim.org,2014-05-21:property/elastic-constants-isothermal-cubic-crystal-npt",
    key:"c11"
  }
},
{
  name:'c12 [GPa]',
  accessorString:'c12.si-value',
  default:'N/A',
  format:(data)=>{return data*Math.pow(10,-9);},
  queryDescription:{
    tag:"tag:staff@noreply.openkim.org,2014-05-21:property/elastic-constants-isothermal-cubic-crystal-npt",
    key:"c12"
  }
},
{
  name:'c44 [GPa]',
  accessorString:'c44.si-value',
  default:'N/A',
  format:(data)=>{return data*Math.pow(10,-9);},
  queryDescription:{
    tag:"tag:staff@noreply.openkim.org,2014-05-21:property/elastic-constants-isothermal-cubic-crystal-npt",
    key:"c44"
  }
}
];


export const queries=[
  (name)=>{
    return {
      "visualizer-id": "",
      "sort":"[[\"short-name.source-value\",1],[\"meta.subject.kimcode\",1]]",
       "query": "{\"meta.type\":\"tr\",\"property-id\":\"tag:staff@noreply.openkim.org,2014-04-15:property/cohesive-potential-energy-cubic-crystal\",\"meta.runner.kimcode\":{\"$regex\":\"^LatticeConstantCubicEnergy_.*\"},\"species.source-value\":{\"$all\":[\""+name+"\"],\"$not\":{\"$elemMatch\":{\"$nin\":[\""+name+"\"]}}}}",
       "fields": "{\"a.si-value\":1,\"cohesive-potential-energy.si-value\":1,\"meta.subject.kimcode\":1,\"meta.runner.kimcode\":1,\"short-name.source-value\":1}",
       "database": "data"
    }
  },
  (name)=>{
    return {
     "visualizer-id": "",
     "sort":"[[\"short-name.source-value\",1],[\"meta.subject.kimcode\",1]]",
     "query": "{\"meta.type\":\"tr\",\"property-id\":\"tag:staff@noreply.openkim.org,2014-05-21:property/elastic-constants-isothermal-cubic-crystal-npt\",\"meta.runner.kimcode\":{\"$regex\":\"^ElasticConstantsCubic.*\"},\"species.source-value\":{\"$all\":[\""+name+"\"],\"$not\":{\"$elemMatch\":{\"$nin\":[\""+name+"\"]}}}}",
     "fields": "{\"c11.si-value\":1,\"c12.si-value\":1,\"c44.si-value\":1,\"meta.subject.kimcode\":1,\"meta.runner.kimcode\":1,\"short-name.source-value\":\"1\"}",
     "database": "data"
    }
  }
]
