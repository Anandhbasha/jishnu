import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Slice/Slice";

const Store = configureStore(
    {
        reducer:{
            counts:counterSlice.reducer
        }
    }
)

export default Store