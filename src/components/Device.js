import React, { Component } from 'react';
import axios from 'axios';
import MainPanel from './MainPanel.js';
import Sidebar from './Sidebar.js';
import Titlebar from './Titlebar.js';

class Device extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: null,
            artist: null,
            powerOn: false, 
            song: null,
            inputSource: null,
            volume: 0,
            balance: 0,
            host: 'http://localhost:8010/proxy'
        };
        this.handleBalanceDown = this.handleBalanceDown.bind(this);
        this.handleBalanceUp = this.handleBalanceUp.bind(this);
        this.handleSetInputSource = this.handleSetInputSource.bind(this);
        this.handlePowerOnChange = this.handlePowerOnChange.bind(this);
        this.handleVolumeDown = this.handleVolumeDown.bind(this);
        this.handleVolumeUp = this.handleVolumeUp.bind(this);
    }

    componentDidMount() {
        this.commandGetBasicStatus();
        this.commandGetPlayerInfo();
        this.commandGetBalance();
    }

    commands(commandLabel) {
        const commands = {
            'powerOff': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="PUT"><System><Power_Control><Power>Standby</Power></Power_Control></System></YAMAHA_AV>',
            'getBasicStatus': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="GET"><System><Basic_Status>GetParam</Basic_Status></System></YAMAHA_AV>',
            'getPlayerInfo': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="GET"><Player><Play_Info>GetParam</Play_Info></Player></YAMAHA_AV>',
            'setVolume': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="PUT"><System><Volume><Lvl>___VOLUME___</Lvl></Volume></System></YAMAHA_AV>',
            'getBalance': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="GET"><System><Sound><Balance>GetParam</Balance></Sound></System></YAMAHA_AV>',
            'setBalance': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="PUT"><System><Sound><Balance>___BALANCE___</Balance></Sound></System></YAMAHA_AV>',
            'setInputSel': '<?xml version="1.0" encoding="utf-8" ?><YAMAHA_AV cmd="PUT"><System><Input><Input_Sel>___INPUT_SEL___</Input_Sel></Input></System></YAMAHA_AV>',
        }

        return commands[commandLabel];
    };

    commandTurnOff() {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('powerOff');

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    commandGetPlayerInfo() {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('getPlayerInfo');

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then((response) => {
            const parser = new DOMParser();
            const responseXml = parser.parseFromString(response.data, "text/xml");
            let album = null;
            let artist = null;
            let song = null;

            if (responseXml.getElementsByTagName("Album")[0].childNodes[0]) {
                album = responseXml.getElementsByTagName("Album")[0].childNodes[0].nodeValue;
            }
            
            if (responseXml.getElementsByTagName("Artist")[0].childNodes[0]) {
                artist = responseXml.getElementsByTagName("Artist")[0].childNodes[0].nodeValue;
            }

            if (responseXml.getElementsByTagName("Song")[0].childNodes[0]) {
                song = responseXml.getElementsByTagName("Song")[0].childNodes[0].nodeValue;
            }
            
            this.setState({album: album, artist: artist, song: song});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    commandGetBasicStatus() {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('getBasicStatus');

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then((response) => {
            const parser = new DOMParser();
            const responseXml = parser.parseFromString(response.data, "text/xml");
            const volume = parseInt(responseXml.getElementsByTagName("Lvl")[0].childNodes[0].nodeValue);
            const powerOn = responseXml.getElementsByTagName("Power")[0].childNodes[0].nodeValue == 'On';
            const inputSource = responseXml.getElementsByTagName("Input_Sel")[0].childNodes[0].nodeValue;
            this.setState({volume: volume, powerOn: powerOn, inputSource: inputSource});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    commandGetBalance() {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('getBalance');

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then((response) => {
            const parser = new DOMParser();
            const responseXml = parser.parseFromString(response.data, "text/xml");
            const balance = parseInt(responseXml.getElementsByTagName("Balance")[0].childNodes[0].nodeValue);
            this.setState({balance: balance});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    commandSetVolume(volume) {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('setVolume').replace('___VOLUME___', volume);

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    commandSetBalance(balance) {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('setBalance').replace('___BALANCE___', balance);

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    commandSetInputSource(inputSource) {
        const host = this.state.host;
        const url = host + '/YamahaRemoteControl/ctrl';
        const xml = this.commands('setInputSel').replace('___INPUT_SEL___', inputSource);

        axios({
            method: 'post',
            headers: { 'Content-Type': 'text/xml; charset=UTF-8' },
            url: url,
            data: xml
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
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

        if (volume < 0) {
            return false;
        }

        this.setState({volume: volume});
        this.commandSetVolume(volume);
    }

    handleVolumeUp() {
        const volume = this.state.volume + 1;

        if (volume > 50) {
            return false;
        }

        this.setState({volume: volume});
        this.commandSetVolume(volume);
    }

    handleBalanceDown() {
        const balance = this.state.balance - 1;

        if (balance < -10) {
            return false;
        }

        this.setState({balance: balance});
        this.commandSetBalance(balance);
    }

    handleBalanceUp() {
        const balance = this.state.balance + 1;

        if (balance > 10) {
            return false;
        }

        this.setState({balance: balance});
        this.commandSetBalance(balance);
    }

    handleSetInputSource(inputSource) {
        this.setState({inputSource: inputSource});
        this.commandSetInputSource(inputSource);
    }

    render() {
        const album = this.state.album;
        const artist = this.state.artist;
        const balance = this.state.balance;
        const inputSource = this.state.inputSource;
        const powerOn = this.state.powerOn;
        const song = this.state.song;
        const volume = this.state.volume;

        return (
            <div className="layout">
                <Titlebar />
                <Sidebar 
                    powerOn={powerOn} 
                    onBalanceDown={this.handleBalanceDown}
                    onBalanceUp={this.handleBalanceUp}
                    onVolumeDown={this.handleVolumeDown}
                    onVolumeUp={this.handleVolumeUp}
                    onPowerOnChange={this.handlePowerOnChange}
                />
                <MainPanel 
                    album={album}
                    artist={artist}
                    balance={balance}
                    inputSource={inputSource}
                    powerOn={powerOn}
                    song={song}
                    volume={volume} 
                    onInputSourceChange={this.handleSetInputSource}
                />
            </div>
        )
    }
}

export default Device;