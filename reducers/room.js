const roomsType = {
    ADD_ROOM: 'ADD_ROOM'
}

const updateRooms = (state=[], action) => {
    if(action.type === roomsType.ADD_ROOM) {
        return [...new Set([...state, action.room])];
    };
    return state;
}

export default updateRooms;