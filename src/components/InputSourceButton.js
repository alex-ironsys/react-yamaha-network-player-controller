import React, { Component } from 'react';

class InputSourceButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onInputSourceChange(this.props.buttonSource);
    }

    render() {
        const className = this.props.inputSource === this.props.buttonSource ? 'active' : 'inactive';

        return (
            <button className={className} onClick={this.handleClick}>{this.props.buttonSource}</button>
        )
    }
}

export default InputSourceButton;