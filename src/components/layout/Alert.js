import React from 'react'

const Alert = ({ alerts }) => {
    return (
        alerts !== null && (
            <div className={`alert alert-${alerts.type}`}>
                <i className='fas fa-info-circle'></i> {alerts.msg}
            </div>
        )
    );
}

export default Alert