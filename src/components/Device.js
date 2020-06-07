import React, { Component } from 'react';
import MainPanel from './MainPanel.js';
import Sidebar from './Sidebar.js';
import Titlebar from './Titlebar.js';

class Device extends Component {
    constructor(props) {
        super(props);
        this.handlePowerOnChange = this.handlePowerOnChange.bind(this);
        this.state = {powerOn: false};
    }

    handlePowerOnChange(powerOn) {
        this.setState({powerOn: powerOn});
    }

    render() {
        const powerOn = this.state.powerOn;

        return (
            <div className="layout">
                <Titlebar />
                <Sidebar powerOn={powerOn} onPowerOnChange={this.handlePowerOnChange} />
                <MainPanel />
            </div>
        )
    }
}

export default Device;