import React from "react";

class ReduxCounter extends React.Component{
    render(){
        return (
            <div>
                <button onClick={this.props.actionInc}>+</button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.actionDec}>-</button>
            </div>
        );
    }
}

export default ReduxCounter;
