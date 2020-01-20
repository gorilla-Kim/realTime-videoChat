const audioTypes = {
    SET_AUDIO: "SET_AUDIO" 
};

const setAudio = (state=true, action) => (action.type === audioTypes.SET_AUDIO ? action.audio : state);

export default setAudio;