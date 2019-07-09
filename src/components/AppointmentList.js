import React from 'react';
import Appointment from './Appointment';

const AppointmentList = ({ appointments }) => {
   return ( 
   <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">MANNAGE THE APPOINTMENT</h2>
            <div className="lista-citas">
                { appointments.map( appointment => (
                    <Appointment 
                    key={ appointment.id }
                    appointment={ appointment }
                    />
                ) )}
            </div>
        </div>
    </div>
   )
};

export default AppointmentList;