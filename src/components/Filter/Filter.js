import React, { Component } from 'react';
import Select from 'react-select';



class Filter extends Component {

    handleChange = (values) => {
      this.props.updateLocation(values)
  }

  optionFormatter = (list) => {
    return list.map(opt => {
        let obj = {}
        obj["value"] = opt
        obj["label"] = opt

        return obj
    })
  }

  updateResult = () => {
      this.props.updateResult()
  }


  render() {

    const { locationValue, location } = this.props
    let options = []
    if(location){
        options = this.optionFormatter(location)
    }

    return( 

        <div className="filter-wrapper-inner">
            {/* <div>
                <div>
                    <label>Company</label>
                </div>
                <div>
                   
                </div>
            </div> */}

            <div className="filter-dropdown">
                <div>
                    <label>Location</label>
                    <Select
                        value={locationValue}
                        onChange={this.handleChange}
                        options={options}
                        isMulti={true}
                    />
                    <span>{locationValue.length} selected</span>
                </div>
                <div>
                   
                </div>
            </div>
           <div><button className="default-btn" onClick={() => this.updateResult()}>Apply</button></div>
        </div>
        
    );
  }
}

export default Filter;
