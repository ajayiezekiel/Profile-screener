import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({user: {FirstName, LastName, LastLogin}}) => {
    return (
        <div className='card text-center'>
            <div>
                <i className='far fa-user round-img' style={{width: '80px'}}></i>
            </div>
            
            <h3> {FirstName} {LastName} </h3>
            <div>
                <a href='/' className='btn btn-dark btn-sm my-1'>More</a>
            </div>
            <p className='text-left'>Last seen: {LastLogin} </p>
        </div>
        )
};



UserItem.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserItem
