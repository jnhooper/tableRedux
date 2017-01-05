import React, {PropTypes, Component}  from 'react';
import FontAwesome from 'react-fontawesome';

class Cell extends Component{
  render () {
    let hover = this.props.hover;
    let value = this.props.value;
    let filter = this.props.filter;
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
  }
}

Cell.defaultProps = {filter:(a)=> a};

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
