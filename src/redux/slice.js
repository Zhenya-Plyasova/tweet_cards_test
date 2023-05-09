import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, toggleFolowing } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersInitialState = {
    users: [],
    isLoading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, handlePending)
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.users = payload;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, handleRejected)
            .addCase(toggleFolowing.pending, handlePending)
            .addCase(toggleFolowing.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null; 
                const index = state.users.findIndex(
                    user => user.id === payload.id
                );
                state.users.splice(index, 1, payload);
            })
        .addCase(toggleFolowing.rejected, handleRejected)
    },
},
);
export const usersReducer = usersSlice.reducer;
// export const { fetchingInProgress, fetchingRejected, fetchingSuccess } = usersSlice.actions;