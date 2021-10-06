import React from "react";

import Button from "../components/Button";

class ButtonCounter extends React.Component {
    state = { count: 0 };

    handleClickPlus = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    handleClickMinus = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    render() {
        return (
            <div>
                <Button handleClick={this.handleClickPlus} text="+"/>
                <span>{this.state.count}</span>
                <Button handleClick={this.handleClickMinus} text="-"/>
            </div>
        )
    }
}

export default ButtonCounter;
