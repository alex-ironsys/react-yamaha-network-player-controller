import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Device from './components/Device.js';
import './styles/styles.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Device />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))