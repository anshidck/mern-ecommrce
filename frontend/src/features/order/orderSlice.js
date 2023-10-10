import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from "./orderService";

const initialState = {
    orders: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const fetchOrder = createAsyncThunk(
    'orders/fetchOrder',
    async (userId, thunkAPI) => {
        try {
            const response = await orderService.fetchOrder(userId);
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.orders = (action.payload)
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
});
export const { reset } = orderSlice.actions
export default orderSlice.reducer;