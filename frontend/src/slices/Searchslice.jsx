import { createSlice } from "@reduxjs/toolkit";
const Searchslice =createSlice({
    name:"search",
    initialState:{
        input:" "
    },
    reducers:{
        searchit:(state,actions)=>{
            console.log("searchit");
        },
        deleteit:(state,actions)=>{
            console.log("delete");
        }
    }
})

export default Searchslice.reducer;
export const {searchit,deleteit}=Searchslice.actions;