import React, { Component, Fragment } from 'react';

import Sync from '../assets/sync.svg'
import Loader from "../Loader/Loader"
import Filter from "../Filter/Filter"


class JobSync extends Component {

  handler = () => {
      this.props.getJobs()
  }


  render() {

    const { isLoading , location} = this.props
    console.log(location)
    let element = (
                <Fragment>
                     <img className="sync-img" src={Sync} alt="Sync" />
                    <span className="sync-text">Sync</span>
                </Fragment>
               
    )

    if(isLoading){
        element = <Loader />
    }

    return( 

        <div className="jobsync-wrapper border-bottom">
            <div className="filter-wrapper">
                <Filter location={location} {...this.props} />
            </div>
            <div className="jobsync-inner-wrapper cursor-pointer" onClick={this.handler}>
                {element}
            </div>
        </div>
        
    );
  }
}

export default JobSync;
