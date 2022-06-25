import { CHANGE_ACTIVE } from '../actions/menuActions'

const initialState = 0

const activeElement = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE:
            return action.payload.activeElement
        default:
            return state
    }
}

export default activeElement