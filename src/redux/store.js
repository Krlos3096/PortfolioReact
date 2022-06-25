import { createStore } from 'redux'
import activeElement from './reducers/menuReducer'

const store = createStore(activeElement)

export default store