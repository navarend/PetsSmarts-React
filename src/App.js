import React, { Component } from 'react';
import './bootstrap.min.css'
import NewAppointment from './components/NewAppointment';
import Header from './components/Header'   
import AppointmentList from './components/AppointmentList';

class App extends Component{
  state = {
    appointment: []
  }
 //when the app load read the data from the storage.
  componentDidMount(){
    const appointmentStorage = localStorage.getItem('appoiments');
    if(appointmentStorage){
      this.setState({
        appointment : JSON.parse(appointmentStorage)
      })
    }
  }
  // set the data into the storage when is a new appoiment or delete it
  componentDidUpdate(){
    localStorage.setItem('appoiments', JSON.stringify( this.state.appointment ));
  }

  createAppointment = dataAppointment => {
    //Copy the actual state
    const appointment = [...this.state.appointment, dataAppointment];
    //add the new state
    this.setState({ appointment });
  }

  //Delete the appointment of state
  deleteAppointment = id => {
    const actualAppoinment = [...this.state.appointment]; 
    const appointment = actualAppoinment.filter( appointmentName => appointmentName.id !== id );
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
              <AppointmentList appointments={ this.state.appointment } deleteAppointment={ this.deleteAppointment }></AppointmentList>
            </div>
          </div>  
        </div>

      </div>
    )
  }
}

export default App;
