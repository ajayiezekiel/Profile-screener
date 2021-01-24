import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import nextId from 'react-id-generator';

const Users = ({users, loading}) => {
    let htmlId = nextId();
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className='grid-3'>
                {users.map(user => 
                    (<UserItem key={htmlId.id} user={user} />)
                )}         
            </div>
        )
    }    
};
export default Users
