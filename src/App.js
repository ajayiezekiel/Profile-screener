import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pagination from './components/layout/Pagination';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserDetails from './components/users/user';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import Filter from './components/layout/Filter';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerpage] = useState(20);

  const [localUsers, setLocalUsers] = useState([]);


  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      const res = await axios.get('https://api.enye.tech/v1/challenge/records');
      setLocalUsers(res.data.records.profiles);
      setUsers(res.data.records.profiles);
      setLoading(false);
    }
    getUsers();
    // eslint-disable-next-line
  }, []);
  

  // Search Patient
  const searchPatients = (text) => {
    const lowercasedFilter = text.toLowerCase();
    const filteredData = localUsers.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    setUsers(filteredData);
  };
  // Clear search filter
  const clearSearch = () => setUsers(localUsers);

  // set alert for empty  string submission
  const showAlert = (msg, type) => {
    setAlert({msg, type });

    setTimeout(() => setAlert(null), 5000);
  }

  // Filter based on gender
  const filterGender = (val) => {
    if (val === '') {
      setUsers(localUsers);
    } else {
      const filteredData = localUsers.filter(item => item['Gender'] === val);
      setUsers(filteredData);
    }
  }

  // Filter based on payment method
  const filterPayment = (val) => {
    if (val === '') {
      setUsers(localUsers);
    } else {
      const filteredData = localUsers.filter(item => item['PaymentMethod'] === val);
      setUsers(filteredData);
    }
  }

  // Get current profiles
  const indexOfLastProfile = currentPage * itemsPerpage;
  const indexOfFirstProfile = indexOfLastProfile - itemsPerpage;
  const currentProfiles = users.slice(indexOfFirstProfile, indexOfLastProfile);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Alert alerts={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
                searchPatients={searchPatients} 
                clearSearch={clearSearch}
                setAlert={showAlert} />
                <Filter 
                filterGender={filterGender} 
                filterPayment={filterPayment} />
                <Users users={currentProfiles} loading={loading} />
                <Pagination 
                itemsPerPage={itemsPerpage} 
                totalProfiles={users.length} 
                paginate={paginate} />
              </Fragment>
            )} />
            <Route path='/:username' component={UserDetails} />
          </Switch>              
        </div>
      </div>
    </Router>
  );
  
}

export default App;
