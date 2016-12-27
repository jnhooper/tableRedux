import React, {PropTypes} from 'react';

const DropDown = ({options, onChange})=>(
  <select onChange={onChange} className="dropDown">
    {options.map(option=>
      <option key={option.value}
        value={option.value}>{option.name}</option>
      )
    }
  </select>
);

DropDown.propTypes={
  options: PropTypes.arrayOf(PropTypes.shape({
    value:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  })),
  onChange: PropTypes.func
}

export default DropDown;
