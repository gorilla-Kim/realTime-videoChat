// 모든 reducer들을 하나로 통합하여 관리
import { combineReducers } from "redux";

import audio from "./audio";
import video from "./video";
import room from "./room";

const reducers = combineReducers({
    room,
    video,
    audio
});

export default reducers;