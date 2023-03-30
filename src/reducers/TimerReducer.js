import { createSlice } from "@reduxjs/toolkit";


const TimerReducer = createSlice({
    name:"timer",
    initialState:{
        timeValue : 25,
        pomodoroTime:25,
        shortBreak:5,
        longBreak:15
    },
    reducers:{
        timeChange : (state,action) =>{
            state.timeValue = action.payload
        },
        pomodoroChange : (state,action) =>{
            state.pomodoroTime = state.pomodoroTime + action.payload
        },
        shortChange : (state,action) =>{
            state.shortBreak = state.shortBreak + action.payload
        },
        longChange : (state,action) =>{
            state.longBreak = state.longBreak + action.payload
        }
    }
})

export const {timeChange,pomodoroChange,shortChange,longChange} = TimerReducer.actions;
export default TimerReducer.reducer;