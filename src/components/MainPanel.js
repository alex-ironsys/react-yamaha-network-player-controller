import React, { Component } from 'react';
import PlayerInfoDisplay from './PlayerInfoDisplay.js';
import SourceControl from './SourceControl.js';
import StatusDisplay from './StatusDisplay.js';

class MainPanel extends Component {
    render() {
        return (
            <div>
                <SourceControl 
                    inputSource={this.props.inputSource}
                    onInputSourceChange={this.props.onInputSourceChange}
                />
                <StatusDisplay
                    balance={this.props.balance}
                    powerOn={this.props.powerOn} 
                    volume={this.props.volume}
                />
                <PlayerInfoDisplay
                    album={this.props.album}
                    artist={this.props.artist}
                    inputSource={this.props.inputSource}
                    powerOn={this.props.powerOn}
                    song={this.props.song}
                />
            </div>
        )
    }
}

export default MainPanel;