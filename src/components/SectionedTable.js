import React, {PropTypes} from 'react';
import Row from './Row';
import Section, {SectionProp} from './Section';
import '../css/sectionedTable.css'
/**
* the table has sections, data and columns
* the columns have names, accessorStrings
**/
const SectionedTable=({sections=[], data, columns})=>{  
  return (
    <div className="tableContainer">
      <div className="headerContainer">
        <div className="headerBuffer"></div>
        <div className="headerRows">
          <Row className="headers" items={columns}/>
        </div>
      </div>
      {sections.map((section, index)=>
         <Section key={index} rows={section.rows}
          name={section.name}/>
      )}
    </div>
  );
};


SectionedTable.propTypes={
    sections:PropTypes.arrayOf(SectionProp).isRequired,
    columns:PropTypes.arrayOf(PropTypes.shape({
      value:PropTypes.string.isRequired
    }))
};

export default SectionedTable;
