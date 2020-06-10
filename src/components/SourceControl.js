import React, { Component } from 'react';
import InputSourceButton from './InputSourceButton.js';

class SourceControl extends Component {
    render() {
        return (
            <div>
                <InputSourceButton
                    inputSource={this.props.inputSource}
                    buttonSource='CD'
                    onInputSourceChange={this.props.onInputSourceChange}
                />
                <InputSourceButton
                    inputSource={this.props.inputSource}
                    buttonSource='NET RADIO'
                    onInputSourceChange={this.props.onInputSourceChange}
                />
                <InputSourceButton
                    inputSource={this.props.inputSource}
                    buttonSource='USB'
                    onInputSourceChange={this.props.onInputSourceChange}
                />
                <InputSourceButton
                    inputSource={this.props.inputSource}
                    buttonSource='TUNER'
                    onInputSourceChange={this.props.onInputSourceChange}
                />
            </div>
        )
    }
}

export default SourceControl;