import { createSlice } from "@reduxjs/toolkit";
const Searchslice =createSlice({
    name:"search",
    initialState:{
        input:" "
    },
    reducers:{
        searchit:(state,actions)=>{
            state.input=actions.payload
            console.log(state.input)
        },
        deleteit:(state,actions)=>{
            state.input=actions.payload
        }
    }
})

export default Searchslice.reducer;
export const {searchit,deleteit}=Searchslice.actions;