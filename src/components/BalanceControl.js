import React, { Component } from 'react';

class BalanceControl extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClickBalanceDown}>Balance Left</button>
                <button onClick={this.props.onClickBalanceUp}>Balance Right</button>
            </div>
        )
    }
}

export default BalanceControl;