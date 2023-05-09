import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://645656215f9a4f2361411c15.mockapi.io/api/v1/';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page=1, thunkAPI) => {
        try {
            const response = await axios.get(`/users?page=${page}&limit=6`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const toggleFolowing = createAsyncThunk(
    'users/editUser',
    async (user, thunkAPI) => {
        try {
            const response = await axios.put(`/users/${user.id}`, {
                isFollowing: !user.isFollowing,
                followers: !user.isFollowing? user.followers+1 : user.followers-1 ,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)