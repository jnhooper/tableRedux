import React, {PropTypes, Component}  from 'react';
import FontAwesome from 'react-fontawesome';
import ReactTooltip from 'react-tooltip';

class Cell extends Component{
  componentDidMount () {
    ReactTooltip.rebuild();
  }

  render () {
    let hover = this.props.hover;
    let value = this.props.value;
    let filter = this.props.filter;
    let className, cell;
    hover?className="toolTipText":className="hidden"
    if(hover){
      cell = <div>
        {filter(value)}
        <i data-tip={hover} data-for={value} className="fa fa-question-circle"></i>
        <ReactTooltip className="customTooltip"
          place="bottom" id={value} type="info" effect="solid"/>
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
