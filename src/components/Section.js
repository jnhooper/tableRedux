import React, {PropTypes} from 'react';
import Row, {RowProp}from './Row';
import FontAwesome from 'react-fontawesome';

let clickHandle = (func, self)=>{
  return (e)=>{
      console.log(e.target.className)
      func(e);
  }
}

let compressed = false;
let getIcon=(cmprs=false)=>{
  let result
  cmprs? result="expand": result="compress";
  return result;
}

let toggleCompressed=()=>{
  compressed = !compressed;
}

const Section = React.createClass({

  getInitialState:function(){
        return {
          collapsed:false,
          nameClick:()=>{return}
        };
  },

  clickHandle:function(func){
    let self = this;
    return (e)=>{
      self.setState({collapsed:!self.state.collapsed});
      func(e);
    }
  },

render: function() {


      let nameClick, collapsed
      if(this.props.nameClick===undefined){
        nameClick=()=>{return};
      }else{nameClick=this.props.nameClick}

      collapsed = this.state.collapsed
      let classes = "sectionContainer";
      if(collapsed){
          classes+= " hidden";
      }
      let name = this.props.name;
      let rows = this.props.rows;
      let self = this;
    return (
      <div className={classes}>
          <div className="sectionName"
          onClick={this.clickHandle(nameClick)}>
              {name}
              <br/>              
              <FontAwesome className='expand'
              name={collapsed? 'expand':'compress'}/>
          </div>
          <div className="sectionRows">
              {rows.map((row, index)=>
                <Row key={index} items={row}/>
              )}
          </div>
      </div>
    );
  }
});
// })

// const Section = ({nameClick=()=>{return}, name, rows, collapsed=false})=>{
//   return (
//     <div className="sectionContainer">
//         <div className="sectionName"
//         onClick={(e)=>{nameClick(e); setState()}}>
//             {name}
//             <br/>
//             <FontAwesome className='expand'
//             name={collapsed? 'expand':'compress'}/>
//         </div>
//         <div className="sectionRows">
//             {rows.map((row, index)=>
//               <Row key={index} items={row}/>
//             )}
//         </div>
//     </div>
//   )
// }

Section.propTypes={
  rows:PropTypes.arrayOf(RowProp).isRequired,
  name:PropTypes.string.isRequired
}

export const SectionProp = PropTypes.shape({
  rows:PropTypes.arrayOf(RowProp).isRequired,
  name:PropTypes.string.isRequired
});

export default Section;
