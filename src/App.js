import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Welcome to React!";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text={this.state.input} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>


          <input type="text" value={this.state.input} onChange={this.updateInput} />
          <input type="text" ref={(input) => this.input_text = input} />
          <button onClick={this.submit}>Show Value</button>
          
          
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    let { text } = this.props;
    return <h1 className="App-title">{text}</h1>
  }
}

export default App;