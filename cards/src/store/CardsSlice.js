import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dataCards: [],
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCards: (state, action) => {
            state.dataCards.push(action.payload);
        },

    },
});

export const {addCards} = cardSlice.actions;
export default cardSlice.reducer;