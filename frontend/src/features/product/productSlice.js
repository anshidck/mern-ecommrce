import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
    products: [],
    item: [],
    items:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new product
export const createProduct = createAsyncThunk(
    'productss/create',
    async (productData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await productService.createProducts(productData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const fetchAll = createAsyncThunk(
    'product/getAll',
    async (_, thunkAPI) => {
        try {          
            return await productService.fetchAll()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const fetchItem = createAsyncThunk(
    'products/getAll',
    async ({ search }, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await productService.fetchitem(search, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get product by ID
export const getproductById = createAsyncThunk(
    'product/getById',
    async (productId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await productService.getProductById(productId, token);
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

export const searchProducts = createAsyncThunk(
    'products/search',
    async ({ search }, thunkAPI) => {
        try {
            const response = await productService.fetchitem({ search })
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateProduct = createAsyncThunk(
    'products/update',
    async ({ id, productData }, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await productService.updateProduct(id, productData, token);
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


// Delete vehicle
export const deleteProduct = createAsyncThunk(
    'products/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await productService.deleteProduct(id, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products.unshift(action.payload)
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(fetchItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.items = action.payload
            })
            .addCase(fetchItem.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(fetchAll.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload
            })
            .addCase(fetchAll.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getproductById.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(getproductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.item = action.payload;
            })
            .addCase(getproductById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            })
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = state.products.map((product) =>
                    product._id === action.payload._id ? action.payload : product
                );
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = state.products.filter(
                    (product) => product._id !== action.payload.id
                )
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = productSlice.actions
export default productSlice.reducer