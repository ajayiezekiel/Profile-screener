import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';



const UserItem = ({user}) => {
    
    return (
        <div className='card text-center'>
            <div>
                <i className='far fa-user round-img' style={{width: '80px'}}></i>
            </div>
            
            <h3> {user.FirstName} {user.LastName} </h3>
            <h4> {user.Gender} </h4>
            <div>
                <Link to={{ pathname: user.UserName, state: user }} className='btn btn-dark btn-sm my-1'>More</Link>
            </div>
            <p className='text-left'> 
                Last seen: <Moment format="hh:mm MMM DD YYYY">{user.LastLogin}</Moment> 
            </p>
        </div>
        )
};



UserItem.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserItem
