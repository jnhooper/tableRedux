import {ajax} from 'jquery';

// ajax('https://raw.githubusercontent.com/openkim/openkim-properties/master/properties/structure-cubic-crystal-npt/2014-04-15-staff%40noreply.openkim.org/structure-cubic-crystal-npt.edn#')
// .then(data=>{console.log(data)});
const columns=[
{
  name:'Model',
  accessorString:'meta.subject.kimcode',
  columnDescription:"test"
},
{
  name:'Lattice Constant [Å]',
  accessorString:'a.si-value',
  format:(data)=>{return data*Math.pow(10,10);},
  columnDescription:"Average equilibrium conventional lattice constant of the cubic crystal."
},
{
  name:'Cohesive Energy [eV]',
  accessorString:'cohesive-potential-energy.si-value',
  format:(data)=>{return data*(6.2415093433*Math.pow(10,18));}
},
{
  name:'c11 [GPa]',
  accessorString:'c11.si-value',
  default:'N/A',
  format:(data)=>{return data*Math.pow(10,-9);}
},
{
  name:'c12 [GPa]',
  accessorString:'c12.si-value',
  default:'N/A',
  format:(data)=>{return data*Math.pow(10,-9);}
},
{
  name:'c44 [GPa]',
  accessorString:'c44.si-value',
  default:'N/A',
  format:(data)=>{return data*Math.pow(10,-9);}
}
];

export default columns;
