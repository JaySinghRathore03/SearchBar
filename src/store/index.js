// import { createStore } from "redux";
import {createSlice, configureStore} from "@reduxjs/toolkit"
import viewSlice from "./viewSlice";


// const Redux =  require("redux");
const store = configureStore({
    reducer: {view: viewSlice}
})

export default store;

