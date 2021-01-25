import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: '',
        show: false
    }

    static propTypes = {
        searchPatients: PropTypes.func.isRequired,
        clearSearch: PropTypes.func.isRequired,

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light');
        } else {
            this.props.searchPatients(this.state.text);
            this.setState({text: '', show: true});
        }
    }
    onClick = () => {
        this.props.clearSearch();
        this.setState({show: false});
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type="text" name="text" 
                    placeholder="Search profiles ...." 
                    value={this.state.text} 
                    onChange={this.onChange}
                     />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

                {(this.state.show && <button className='btn btn-light btn-block'
                 onClick={this.onClick}>Clear</button>)}
                 
                
            </div>
        );
    }
}

export default Search

