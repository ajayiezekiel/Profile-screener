import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';


const user = (props) => {
    const {
        FirstName,
        LastName,
        Gender,
        CreditCardType,
        Email,
        DomainName,
        PhoneNumber,
        URL,
        UserName,
        LastLogin,
        PaymentMethod
    } = props.location.state;

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Home
            </Link>
            <div className='card grid-2'>
                <div className='all-center'>
                    <i className='far fa-user round-img' style={{width: '150px'}}></i>
                    <h2> {FirstName} {LastName} </h2>
                    <h3> Last seen: <Moment format="hh:mm MMM DD YYYY">{LastLogin}</Moment> </h3>
                </div>
                <div>
                    <p>Username:  {UserName} </p>
                    <p>Phone number:  {PhoneNumber} </p>
                    <p>Gender:  {Gender} </p>
                    <p>Payment Method:  {PaymentMethod} </p>
                    <p>Credit Card Type:  {CreditCardType} </p>
                </div>
            </div>
            <div className='card text-center'>
                <a className='badge badge-primary' href={DomainName}>Visit this Domain name</a>
                <a className='badge badge-primary' href={URL}>Visit this URL</a>
                <a className='badge badge-primary' href={Email}>Visit this Email</a>
            </div>
        </Fragment>
    )
}

export default user;