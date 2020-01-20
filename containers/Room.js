import React, {Component} from "react";
import MediaContainer from "./MediaContainer";
import CommunicationContainer from "./CommunicationContainer";
import { connect } from "react-redux";
import store from "../store";
import io from "socket.io-client";

class Room extends Component {
    constructor(props){
        super(props);
        // 현재 접속중인 영상과 음성을 담당하는 기능
        this.getUserMedia = navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).catch(error => alert(`Failed at getUserMedia ${error.name}`));
    };
    render(){
        return(
            <>
                <MediaContainer media={media => this.media=media} socket={this.socket} getUserMedia={this.getUserMedia} />
                <CommunicationContainer socket={this.socket} media={this.media} getUserMedia={this.getUserMedia} />
            </>
        );
    };
};
// 중복된 방을 없애기 위해 Set을 씀
const mapstateToProps = store => ({rooms: new Set([...store.rooms])});
const mapDispatchToProps = (dispath, props) => (
    {
        addRoom: () => store.dispath({ type: 'ADD_ROOM', room: props.match.params.room})
    }
)

export default connect(mapstateToProps, mapDispatchToProps)(Room);
