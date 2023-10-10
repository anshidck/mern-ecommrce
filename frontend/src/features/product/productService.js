import axios from 'axios'

const API_URL = '/api/product/'

// Create new product
const createProducts = async (productData) => {
    const response = await axios.post(API_URL, productData)
    return response.data
}

const fetchAll = async (token) => {
    const response = await axios.get(API_URL + 'fetch')
    return response.data
}

// Get product by ID
const getProductById = async (productId) => {
    try {
        const response = await axios.get(API_URL + productId);
        return response.data;
    } catch (error) {
        // Handle error here, e.g., throw an exception or return an error message
        throw error;
    }
};

const fetchitem = async (search, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(`/api/product?search=${search}`, config)
    return response.data
}

const updateProduct = async (productId, productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.put(API_URL + productId, productData, config)
    return response.data
}

// Delete user goal
const deleteProduct = async (productId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.delete(API_URL + productId, config)
    return response.data
}

const productService = {
    fetchitem,
    createProducts,
    updateProduct,
    deleteProduct,
    getProductById,
    fetchAll
}

export default productService