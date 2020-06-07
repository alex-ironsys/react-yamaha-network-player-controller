import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Device extends Component {
    render() {
        return (
            <div className="device">
                <div>
                    <h3 className="primary-color">Sidebar</h3>
                </div>
                <div>
                    <h3 className="primary-color">Main window</h3>
                </div>
            </div>
        )
    }
}

export default Device;