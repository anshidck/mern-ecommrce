import axios from 'axios'

const API_URL = '/api/order/';

export const fetchOrder = async (userId) => {
    const response = await axios.get(API_URL + 'getAllOrder/' + userId); 
      return response.data;
  };

const orderService = {
    fetchOrder
}

export default orderService 