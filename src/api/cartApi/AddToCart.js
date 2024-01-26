import axios from "axios";


const AddToCart = async (body) => {
  try {
    const { data } = await axios.post("https://fakestoreapi.com/carts", body);
    return data;
  } catch (error) {
    throw(error)
  }
};

export default AddToCart;
