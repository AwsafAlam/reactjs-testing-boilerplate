import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Youtube from './Youtube';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <Button variant="contained" color="primary" onClick={this.increment}>
          Increment count
        </Button>
        <Youtube />
      </div>
    )
  }
}

export default App;