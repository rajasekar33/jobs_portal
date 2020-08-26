import React, { Component } from 'react';

import Dashboard from './containers/Dashboard/Dashboard';
import Header from './components/Header/Header'
import SyncComponent from './components/JobSync/JobSync'
import { syncjobs, getjobs } from './network/api'

import "./App.css"

class App extends Component {

  state = {
   jobs: [],
   isLoading: false,
   query: {},
   location: [],
   company: [],
   locationValue: []

  }

  updatejobs = () => {
    getjobs().then(res =>{
      let locations = new Set()
      res.data.forEach((comp) => {
          locations.add(comp.location)
        })
      this.setState({jobs: res.data, location: Array.from(locations)})

    }).catch(err => {
      console.log(err)
    })

  }



  componentDidMount (){
    this.updatejobs()
  }

  getJobs = () => {
    this.setState({isLoading: true})

    syncjobs().then(res =>{
      this.setState({isLoading: false})
      this.updatejobs()
    }).catch(err => {
      this.setState({isLoading: false})
    })
    
  }

  updateLocation = (values) => {
    console.log(values)
    this.setState({locationValue: values})
  }

  updateResult = () => {
    let location = this.state.locationValue.map(val => val.value)
    getjobs(location).then(res =>{
      this.setState({jobs: res.data})

    }).catch(err => {
      console.log(err)
    })

  }
  

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <SyncComponent getJobs={this.getJobs} updateResult={() => this.updateResult()} isLoading={this.state.isLoading} updateLocation={(values) => this.updateLocation(values)} locationValue={this.state.locationValue} location={this.state.location}/>
        <Dashboard jobs={this.state.jobs}/>
      </div>
    );
  }
}

export default App;
