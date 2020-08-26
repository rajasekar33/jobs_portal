import React, { Component } from 'react';

import "./Dashboard.css"
import Desc from '../../components/assets/job-seeking.svg'

class Dashboard extends Component {


  render() {

    console.log(this.props)

    return (
      <div className="dashboard-wrapper">
        <div className="dashboard-filter-section">

        </div>
        <div className="dashboard-job-section">
          {
            this.props.jobs.map(data => {
              return(
                <div className="job-card-wrapper cursor-pointer" onClick={() => {window.open(data.url, "_blank")}}>
                  <div className="card-left-section">
                    <h4 className="clear-margin">{data.title}</h4>
                    <p className="clear-margin">{data.company}</p>
                    <div className="job-description-wrapper">
                      <img style={{width: "15px", marginRight: "10px"}} src={Desc} alt="Desc" />
                      <div className="job-description" dangerouslySetInnerHTML={{__html:data.description}}></div>
                    </div>
                    <div>
                    <span>Location : <span>{data.location}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type : <span>{data.type}</span></span>
                  </div>
                  </div>
                  <div  className="card-right-section">
                    <img style={{width: "100px"}} src={data.company_logo} alt="company" />
                  </div>
                  
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
