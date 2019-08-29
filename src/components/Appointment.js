import React from 'react';

const Appointment = ({ appointment, deleteAppointment }) => {
    return(
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{ appointment.pet }</h3>
                <p className="card-text">
                    <span>Owner:</span> { appointment.owner }
                </p>
                <p className="card-text">
                    <span>Date:</span> { appointment.date }
                </p>
                <p className="card-text">
                    <span>Time:</span> { appointment.time }
                </p>
                <p className="card-text">
                    <span>Symptom:</span>
                </p>
                <p className="card-text">
                    { appointment.symptom }
                </p>
                <button className="btn btn-danger" onClick={ () => deleteAppointment( appointment.id ) }>Delete Appointment &times;</button>
            </div>
        </div>
    )
}

export default Appointment;