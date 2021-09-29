import React from "react";
import {connect} from "react-redux";

import {actionColor} from "../actions/color";

const Color = ({actionColor, color}) => {

    return (
        <div>
            <button className="main_btn" onClick={() => actionColor('green')} style={{background: color}}>Green</button>
            <button className="main_btn" onClick={() => actionColor('red')} style={{background: color}}>Red</button>
            <button className="main_btn" onClick={() => actionColor('blue')} style={{background: color}}>Blue</button>
        </div>
    );
}

const mapStateToProps = (state) => ({color: state.color});

const mapDispatchToProps = {
    actionColor: actionColor,

};

export const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(Color);