import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer, applyMiddleware())

export type RootState = ReturnType<typeof rootReducer>