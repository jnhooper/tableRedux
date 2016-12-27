import React, {PropTypes} from 'react';
import Cell ,{CellProp} from './Cell';

const Row = ({items})=>{
  return (
    <div className="rowContainer">
        {items.map((item, index)=>
          <Cell key={index}
          value={item.value}
          hover={item.hover}/>
      )}
    </div>
  )
}


Row.propTypes={
  items:PropTypes.arrayOf(CellProp).isRequired
}

export const RowProp = PropTypes.arrayOf(CellProp).isRequired

export default Row;