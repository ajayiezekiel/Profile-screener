import React, { Component } from 'react'

export class Filter extends Component {
    state = {
        Gender: '',
        PaymentMethod: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    render() {
        return (
            <div className='grid-2'>  
                <div className='card' onChange={this.onChange}>
                    <p className='card-title'>Gender</p>
                    <input className='m-1' type="checkbox" value="Male" name="Gender" />Male
                    <input className='m-1' type="checkbox" value="Female" name="Gender" />Female
                    <input className='m-1' type="checkbox" value="Prefer to skip" name="Gender" />Other
                </div>
                <div className='card' onChange={this.onChange}>
                <p className='card-title'>Payment method</p>
                    <input className='m-1' type="checkbox" value="cc" name="PaymentMethod" />CC
                    <input className='m-1' type="checkbox" value="check" name="PaymentMethod" />Check
                    <input className='m-1' type="checkbox" value="paypal" name="PaymentMethod" />Paypal
                    <input className='m-1' type="checkbox" value="money order" name="PaymentMethod" />Money Order
                </div>
            </div>
        )
    }
}

export default Filter
