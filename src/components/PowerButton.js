import React, { Component } from 'react';

class PowerButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(!this.props.powerOn);
    }

    render() {
        const className = this.props.powerOn ? 'active' : 'inactive';

        return (
            <button id="power-button" className={className} onClick={this.handleClick}>Power</button>
        )
    }
}

export default PowerButton;