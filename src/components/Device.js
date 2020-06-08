import React, { Component } from 'react';
import axios from 'axios';
import MainPanel from './MainPanel.js';
import Sidebar from './Sidebar.js';
import Titlebar from './Titlebar.js';

class Device extends Component {
    constructor(props) {
        super(props);
        this.handlePowerOnChange = this.handlePowerOnChange.bind(this);
        this.handleVolumeDown = this.handleVolumeDown.bind(this);
        this.handleVolumeUp = this.handleVolumeUp.bind(this);
        this.state = {
            powerOn: false, 
            volume: 0,
            ip: '192.168.1.101', 
            port: 80
        };
    }

    commands(commandLabel) {
        const commands = {
            'powerOff': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="PUT"><System><Power_Control><Power>Standby</Power></Power_Control></System></YAMAHA_AV>',
            'setVolume': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="PUT"><System><Volume><Lvl>___VOLUME___</Lvl></Volume></System></YAMAHA_AV>',
        }

        return commands[commandLabel];
    };

    commandTurnOff() {
        const ip = this.state.ip;
        const port = this.state.port;
        const url = 'http://' + ip + ':' + port + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('powerOff');

        fetch(
            url,
            {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/xml; charset=UTF-8', 'Content-Length': xml.length.toString },
                body: xml
            }
        )
        .then(result => {
          console.log('Success:', result.status);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    commandSetVolume(volume) {
        const ip = this.state.ip;
        const port = this.state.port;
        const url = 'http://' + ip + ':' + port + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('setVolume').replace('___VOLUME___', volume);

        fetch(
            url,
            {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/xml; charset=UTF-8', 'Content-Length': xml.length.toString },
                body: xml
            }
        )
        .then(result => {
          console.log('Success:', result.status);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    handlePowerOnChange(powerOn) {
        this.setState({powerOn: powerOn});
        if (!powerOn) {
            this.commandTurnOff();
        }
    }

    handleVolumeDown() {
        const volume = this.state.volume - 1;
        this.setState({volume: volume});
        this.commandSetVolume(volume);
    }

    handleVolumeUp() {
        const volume = this.state.volume + 1;
        this.setState({volume: volume});
        this.commandSetVolume(volume);
    }

    render() {
        const powerOn = this.state.powerOn;
        const volume = this.state.volume;

        return (
            <div className="layout">
                <Titlebar />
                <Sidebar 
                    powerOn={powerOn} 
                    onPowerOnChange={this.handlePowerOnChange}
                    onVolumeUp={this.handleVolumeUp}
                    onVolumeDown={this.handleVolumeDown}
                />
                <MainPanel volume={volume} />
            </div>
        )
    }
}

export default Device;