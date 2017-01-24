import React, {PropTypes, Component} from 'react';
import Cell ,{CellProp} from './Cell';

class Row extends Component{
  render () {
    let items = this.props.items;
    let props = Object.assign({}, this.props);


    if(!Array.isArray(items)){
      props = Object.assign({},props, items.props);
      items=items.data;      
    }
    let highlight = props.highlight;
    let className = highlight?"rowContainer rowHighlight":"rowContainer";
    return (
      <div className={className}>
          {items.map((item, index)=>
            <Cell key={index}
            value={item.value}
            hover={item.hover}/>
        )}
      </div>
    )
  }
}


Row.propTypes={
  items:PropTypes.oneOfType([
    PropTypes.arrayOf(CellProp),
    PropTypes.shape({
      data:PropTypes.arrayOf(CellProp).isRequired,
    })
  ]).isRequired
}

export const RowProp = PropTypes.oneOfType([
    PropTypes.arrayOf(CellProp),
    PropTypes.shape({
      data:PropTypes.arrayOf(CellProp).isRequired,
    })
]).isRequired

export default Row;
