import React from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/Form'

class App extends React.Component  {
   constructor () {
     super()
     this.state = {
       resData: []
     }
   }

  fetchUserData = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(res => {
        this.setState({ resData: res.data });
        console.log(this.state.resData);
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div className="App">
      <Users />
      </div>
    );
  }
}

export default App;
