
import React from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

 class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resData: [],
      showData: false
    };
  }
  onClick = () => {
    this.setState({ showData: true });
  };
  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(data => {
        this.setState({ resData: data.data });
      })
      .catch(err => console.log(err));
  };

   render() {
    return (
      <div className="App">
        <Form />
        <Display dataStatus={this.state.showData} btn={this.onClick} data={this.state.resData} />
      </div>
    );
  }
}

 export default App;