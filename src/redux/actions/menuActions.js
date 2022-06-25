export const CHANGE_ACTIVE = 'CHANGE_ACTIVE'

export const changeActiveElement = activeElement => ({
    type: CHANGE_ACTIVE, 
    payload: {
        activeElement
    }
})