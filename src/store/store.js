import { configureStore } from "@reduxjs/toolkit";
import StartReducer from "../reducers/StartReducer";
import StyleReducer from "../reducers/StyleReducer";
import TimerReducer from "../reducers/TimerReducer";


const store = configureStore({
    reducer:{
        timer : TimerReducer,
        isStart: StartReducer,
        style: StyleReducer,
    }
})

export default store;