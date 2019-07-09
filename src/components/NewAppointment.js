import React, { Component } from "react";
import uuid from 'uuid';

const initialState = { 
    appointment: {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...initialState };

    handleChange = e => {
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { pet, owner, date, time, symptom } = this.state.appointment;
        if( pet === '' || owner === '' || date === '' || time === '' || symptom === ''){
            this.setState({
                error: true
            });
            return;
        }
        //generate object with the data
        const newAppointment = {...this.state.appointment};
        newAppointment.id = uuid();
        //add the appointment to actual state
        this.props.createAppointment(newAppointment);
        //set state to initialState
        this.setState({ ...initialState })
    }

    render() {
        //get value state
        const { error } = this.state;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">COMPLETE THE FORM TO CREATE APPOINTMENT</h2>
                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">All the fields are requiered</div> : null }
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg2 col-form-label">PET NAME</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Pet name..." name="pet" onChange={ this.handleChange } value={ this.state.appointment.pet }></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg2 col-form-label">OWNER</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Fill the name owner..." name="owner" onChange={ this.handleChange } value={ this.state.appointment.owner }></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg2 col-form-label">SELECT THE DATE</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control" placeholder="Fill the date" name="date" onChange={ this.handleChange } value={ this.state.appointment.date }></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg2 col-form-label">SELECT THE TIME</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" placeholder="Fill the hour" name="time" onChange={ this.handleChange } value={ this.state.appointment.time }></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg4 col-form-label">SYMPTOM</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" name="symptom" placeholder="Describe the symptoms" onChange={ this.handleChange } value={ this.state.appointment.symptom }></textarea>
                            </div>
                        </div>
                        <input type="submit" className="py-3 mt-2 btn btn-primary btn-block" value="Add appointment"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewAppointment;