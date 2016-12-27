import React, {PropTypes}  from 'react';
import FontAwesome from 'react-fontawesome';

const Cell =({value, hover, filter=(a)=>{return a}})=>{
  let className, cell;
  hover?className="toolTipText":className="hidden"
  if(hover){
    cell =<div>{filter(value)}
      <span className="toolTipContainer">
        <i className="fa fa-question-circle"></i>
        <span className="toolTipText">{hover}</span>
      </span>
      </div>
  }else{
    cell= <div>
        {filter(value)}
      </div>
  }
  return (
    <div className="cell">
    {cell}
    </div>
  );
};




Cell.propTypes={
  value:PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired,
  filter:PropTypes.func
};

export const CellProp = PropTypes.shape({
  value:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
})

export default Cell;
