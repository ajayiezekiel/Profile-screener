import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({user: {FirstName, LastName, Gender}}) => {
    return (
        <div className='card text-center'>
            <img src={"https://avatars.githubusercontent.com/u/1?v=4"} alt="profile" 
                className='round-img' 
                style={{width: '60px'}} />
            <h3> {FirstName} {LastName} </h3>
            <div>
                <a href='/' className='btn btn-dark btn-sm my-1'>{Gender}</a>
            </div>
        </div>
        )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserItem
