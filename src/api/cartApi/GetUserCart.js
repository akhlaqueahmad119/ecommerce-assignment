import axios from "axios";


const GetUserCart = async (userId) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
    return data;
  } catch (error) {
    throw(error)
  }
};

export default GetUserCart;
