const videoTypes = {
    SET_VIDEO: "SET_VIDEO" 
};

const setVideo = (state = true, action) => (action.type === videoTypes.SET_VIDEO ? action.video : state)

export default setVideo;