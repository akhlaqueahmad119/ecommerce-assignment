import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../component/productCard";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { getAllProductData } from "../../redux/slice/products";
import moment from "moment";
import AddToCart from "../../api/cartApi/AddToCart";
import { saveAddToCartData } from "../../redux/slice/cart";

function AllProductPage() {
  const currentDate = new Date();
  const dispatch = useDispatch();
  const { Products } = useSelector((state) => state.ProductPageReducer);
  const { addToCartSavedData } = useSelector((state) => state.CartPageReducer);
  useEffect(() => {
    dispatch(getAllProductData());
  }, [dispatch]);

  const addToCart = async (data) => {
    try {
      console.log("data", data)
      let value = {
        userId: 1,
        date: moment(currentDate).format("YYYY-MM-DD"),
        products: [{ productId: data, quantity: 1 }],
      };
      const response = await AddToCart(value);
      dispatch(saveAddToCartData(response));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(" CartPageReducer", addToCartSavedData);
  return (
    <div className={styles.productPage}>
      <div className={styles.productPage_wrapper}>
        {Products?.length > 0 ? (
          Products.map((productData) => (
            <ProductCard
              key={productData.id}
              id={productData.id}
              imgURL={productData.image}
              price={productData.price}
              title={productData.title}
              category={productData.category}
              description={productData.description}
              addToCart={addToCart}
            />
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}

export default AllProductPage;
