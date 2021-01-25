import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import Filter from './components/layout/Filter';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    filter: '',
    alert: null
  };
  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get('https://api.enye.tech/v1/challenge/records');
    this.setState({users: res.data.records.profiles, loading: false});
  }

  // Search Patient
  searchPatients = (text) => {
    this.setState({ loading: false, filter: text})
  };
  // Clear search filter
  clearSearch = () => this.setState({filter: ''});

  setAlert = (msg, type) => {
    this.setState({alert: { msg, type }});

    setTimeout(() => this.setState({ alert: null}), 5000);
  }


  render() {
    const { filter, users, loading } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = users.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search searchPatients={this.searchPatients} 
          clearSearch={this.clearSearch}
          setAlert={this.setAlert} />
          <Filter />
          <Users users={filteredData? filteredData : users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
