import React, {Component} from "react";
import { PropTypes } from "prop-types";

class MediaContainer extends Component {
    constructor(props){
        
    }
    componentWillMount() {
        window.RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection;
        this.props.media(this);
    }
    componentDidMount() {
        this.props.getUserMedia
            .then(stream => this.localVideo.srcObject = this.localStream = stream);
        this.props.socket.on("message", this.onMessage);
        this.props.socket.on("hangUp", this.onRemoteHangup);
    }
    componentWillUnmount() {
        this.props.media(null);
        if(this.localStream !== undefined) {
            this.localStream.getVideoTracks()[0].stop();
        }
        this.props.socket.emit("leave");
    }
    onRemoteHangup() {
        this.setState({user: "host", bridge: "host-hangup"});
    }
    onMessage(message) {
        if(message.type === "offer") {
            this.pc.setRemoteDescription(new RTCSessionDescription(message));
            this.pc.createAnswer()
                .then(this.setDescription)
                .then(this.sendDescription)
                .catch(this.handleError)
        } else if(message === "answer"){
            this.pc.setRemoteDescription(new RTCSessionDescription(message));
        } else if(message === "candidate"){
            this.pc.addIceCandidate(
                new RTCIceCandidate({
                    candidate: message.candidate
                })
            )
        }
    }
    sendData(msg) {
        this.pc.send(JSON.stringify(msg));
    }
    setupDataHandlers() {
        this.pc.onmessage = e => {
            const msg = JSON.parse(e.data);
            console.log(`received :: ${msg}`);
        }
        this.pc.onClose = () => {
            this.remoteStream.getVideoTracks()[0].stop();
            console.log("Closed")
        }
    }
    setDescription(offer) {
        this.pc.setLocalDescription(offer);
    }
    sendDescription() {
        this.props.socket.send(this.pc.localDescription);
    }
    hangUp() {
        this.setState({user: this.user, bridge: "hangup"});
        this.pc.close();
        this.props.socekt.emit("leave");
    }
    handleError(e) {
        console.error(e);
    }
}