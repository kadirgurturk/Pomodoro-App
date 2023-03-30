import { createSlice } from "@reduxjs/toolkit";


const StyleReducer = createSlice({
    name: "style",
    initialState : {
        font:{name : "ROBOTO_SLAB", kod: 'Roboto Slab'},
        color:{name:"blue", kod: "rgba(2, 221, 255, 0.59)"}
    },
    reducers:{
        changeFont: (state,action)=>{
            state.font = action.payload;
        },
        changeColor:(state,action)=>{
            state.color = action.payload;
        }
    }

})

export const {changeFont,changeColor} = StyleReducer.actions;
export default StyleReducer.reducer;