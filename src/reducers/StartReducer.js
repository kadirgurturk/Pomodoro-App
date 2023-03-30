import { createSlice } from "@reduxjs/toolkit";

const StarthReducer=createSlice({
    name:"startReducer",
    initialState:{
        isStart:false,
    },
    reducers:{
        setStart: (state) =>{
            state.isStart = !state.isStart
        }
    }
})

export const {setStart} = StarthReducer.actions;
export default  StarthReducer.reducer