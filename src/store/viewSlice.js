import { createSlice } from "@reduxjs/toolkit";


const initialViewState = {viewShipment : false};

const viewSlice = createSlice({
    name: 'viewShipment',
    initialState: initialViewState,
    reducers: {
        viewShipmentDetails(state){
            state.viewShipment = true;
        },
        homePage(state){
            state.viewShipment = false;
        },
    },
})

export const viewActions = viewSlice.actions;

export default viewSlice.reducer;