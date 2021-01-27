import React, { Component } from 'react'

export class Filter extends Component {

    onChangeGender = e => this.props.filterGender(e.target.value);

    onChangePayment = e => this.props.filterPayment(e.target.value);

    render() {
        return (
            <div className='grid-2'>  
                <div className='card' onChange={this.onChangeGender}>
                    <p className='card-title'>Gender</p>
                    <input className='m-1' type="radio" value="" name="Gender" />All
                    <input className='m-1' type="radio" value="Male" name="Gender" />Male
                    <input className='m-1' type="radio" value="Female" name="Gender" />Female
                    <input className='m-1' type="radio" value="Prefer to skip" name="Gender" />Other
                </div>
                <div className='card' onChange={this.onChangePayment}>
                    <p className='card-title'>Payment method</p>
                    <input className='m-1' type="radio" value="" name="PaymentMethod" />All
                    <input className='m-1' type="radio" value="cc" name="PaymentMethod" />CC
                    <input className='m-1' type="radio" value="check" name="PaymentMethod" />Check
                    <input className='m-1' type="radio" value="paypal" name="PaymentMethod" />Paypal
                    <input className='m-1' type="radio" value="money order" name="PaymentMethod" />Money Order
                </div>
            </div>
        )
    }
}

export default Filter
