import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='grid-3'>
                {users.map((user, idx) => 
                    (<UserItem key={idx} user={user}/>)
                )}         
            </div>
            
        )
    }    
};
export default Users
