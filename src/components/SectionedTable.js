import React, {PropTypes, Component} from 'react';
import Row from './Row';
import Section, {SectionProp} from './Section';
import '../css/sectionedTable.css'
/**
* the table has sections, data and columns
* the columns have names, accessorStrings
**/
class SectionedTable extends Component{
  render(){
    let {sections, data, columns} = this.props;
    return (
      <div className="tableContainer">
        <div className="headerContainer">
          <div className="headerBuffer"></div>
          <div className="headerRows">
            <Row className="headers" items={columns}/>
          </div>
        </div>
        <div className="fakeHeaderContainer">
          <div className="headerBuffer"></div>
          <div className="headerRows">
            <Row className="headers" items={columns}/>
          </div>
        </div>
        <div className="sections">
        {sections.map((section, index)=>
           <Section key={index} rows={section.rows}
            name={section.name}/>
        )}
        </div>
      </div>
    );
  }
};

SectionedTable.propTypes={
    sections:PropTypes.arrayOf(SectionProp).isRequired,
    columns:PropTypes.arrayOf(PropTypes.shape({
      value:PropTypes.string.isRequired
    }))
};

export default SectionedTable;
