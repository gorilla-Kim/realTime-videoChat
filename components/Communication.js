import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import ToggleFullScreen from "./ToggleFullScreen";

const Communication = props => 
    <div className="auth">
        <div className="controls">
            <Link to="/">Back</Link>
            <button onClick={props.toggleAudio}>Audio On/Off</button>
            <button onClick={props.toggleVideo}>Video On/Off</button>
            <button onClick={props.toggleFullScreen}>Fullscreen On/Off</button>
            <button onClick={props.leave}>Leave</button>
        </div>
        <div className="accepted" >
            <p>You accepted an invite</p>
            <div>{props.invites}</div>
        </div>
        <div className="full">
            <p>The room is full</p>
            <Link to="/">Back</Link>
        </div>
        <div className="Wait">
            <p>Awaiting for someone else: </p>
        </div>
    </div>

Communication.PropTypes = {
    audio: PropTypes.bool.isRequired,
    video: PropTypes.bool.isRequired,
    toggleVideo: PropTypes.func.isRequired,
    toggleAudio: PropTypes.func.isRequired,
}

export default Communication;