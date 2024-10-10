import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : 'counter',
    initialState : {    // initial state type must be immuttable(immer value) - array or object
        count : 0
    },
    reducers : {
        increment :(state)=>{   // state is intial state
            state.count++
        },
        decrement :(state)=>{
            state.count--
        },
        reset:(state)=>{
            return {...state,count:0}   
        },
        incrementByAmount:(state,argFRomComponent)=>{
            state.count += +argFRomComponent.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer