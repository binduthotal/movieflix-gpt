import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearchPage: false,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearchPage = !state.showGptSearchPage;
        },
    },
});
export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
