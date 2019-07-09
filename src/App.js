import React, { Component } from 'react';
import './bootstrap.min.css'
import NewAppointment from './components/NewAppointment';
import Header from './components/Header'   
import AppointmentList from './components/AppointmentList';

class App extends Component{
  state = {
    appointment: []
  }
  createAppointment = dataAppointment => {
    //Copy the actual state
    const appointment = [...this.state.appointment, dataAppointment];
    //add the new state
    this.setState({ appointment });
  }
  render() {
    return (
      <div>
        <Header
          title = 'Pets Smart'
        />
        <div className="container">
          <div className="row"> 
            <div className="col-md-10 mx-auto">
              <NewAppointment createAppointment={ this.createAppointment }></NewAppointment>  
            </div>
            <div className="mt-5 col-md-10 mx-auto">
              <AppointmentList appointments={ this.state.appointment }></AppointmentList>
            </div>
          </div>  
        </div>

      </div>
    )
  }
}

export default App;
