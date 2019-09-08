import { UPDATE_USER } from '../actions/userAction';
let userReducer = (state = '', { type, payload }) => {
    switch (type) {
        case UPDATE_USER: return payload;
        default: return state;
    }

}
export default userReducer;