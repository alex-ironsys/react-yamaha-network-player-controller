import React, { Component } from 'react';
import MainPanel from './MainPanel.js';
import Sidebar from './Sidebar.js';
import Titlebar from './Titlebar.js';

class Device extends Component {
    render() {
        return (
            <div className="layout">
                <Titlebar />
                <Sidebar />
                <MainPanel />
            </div>
        )
    }
}

export default Device;