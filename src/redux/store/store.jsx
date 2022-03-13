import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterReducer'
import langAndDarkReducer from '../reducers/langAndDarkReducer'


export default configureStore ({
    reducer: {
        counter: counterReducer,
        langAndDark: langAndDarkReducer
    }
})