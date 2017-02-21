import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Option: []
    }
  };



  componentDidMount() {
    request({ url: this.props.url + "/userlist" })
      .then(response => response.data)
      .then(data => {
        this.setState({
          Option: data,
        })

      });
  }

  



  render() {
    if (this.state.Option[0])
      return <div>{JSON.stringify(this.state.Option)} </div>
    else
      return <div>no data </div>
  }
}

export default App;
