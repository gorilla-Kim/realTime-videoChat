import React from "react";
import { PropTypes } from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = props =>
    <div className="home">
        <div>
            <h1>RealTime Group Video Caht || Home Page 입니다.</h1>
            <p>Enter Room ID: </p>  
            <input type="text" placeholder="👉  Insert Room Id" value={props.roomId} onChange={props.handleChange} />
            <Link>⚡ Join Room</Link>
            <Link>⚡ Create Room</Link>
            { props.rooms.length !== 0 && <div>Recent Room Logs</div> }
            { props.rooms.map(room => <Link key={room} to={`/room/`+ room}>{room}</Link>)}
        </div>
    </div>;

const mapStateToProps = store => ({rooms: store.rooms});

export default connect(mapStateToProps(Home));