import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import cart, { getCartData } from "../../redux/slice/cart";
import { getAllProductData } from "../../redux/slice/products";
import CartCard from "../../component/cartComponents/cartCard";
import AddressCartCard from "../../component/cartComponents/addressCard";
import PaymentCartCard from "../../component/cartComponents/paymentCard";
import OrderPlacedCard from "../../component/cartComponents/orderPlaced";

function CartPage() {
  const [steps, setStep] = useState("cartCard");
  const { user } = useSelector((state) => state.AuthReducer);
  const { Cart, addressFormData, paymentMethod } = useSelector(
    (state) => state.CartPageReducer
  );
  const { Products } = useSelector((state) => state.ProductPageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductData());
    dispatch(getCartData(user.userId));
  }, [dispatch]);

  const handleSteps = (steps) => {
    setStep(steps);
  };

  return (
    <div className={styles.cartPage}>
      <div className={styles.wrapper}>
        {user?.name ? (
          <h1>Hi {user?.name}, Your Cart is Ready</h1>
        ) : (
          <h1>Cart is Ready </h1>
        )}
        <div className={styles.cartPage_head}>
          <div className={styles.cartPage_head_userDetails}>
            <h2>Name : {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Mobile No: {user.phone}</p>
          </div>
          {steps === "cartCard" ? (
            <div>
              {Cart?.map((cart, index) => (
                <CartCard
                  key={cart.productId}
                  productName={"Product Name" + cart.productId}
                  quantity={cart.quantity}
                  price={109 + cart.quantity}
                  imgUrl={
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  }
                />
              ))}
              <div className={styles.cartPage_checkout}>
                <button onClick={() => handleSteps("AddressCartCard")}>
                  Checkout
                </button>
              </div>
            </div>
          ) : steps === "AddressCartCard" ? (
            <div>
              <AddressCartCard handleSteps={handleSteps} />
            </div>
          ) : steps === "PaymentCart" ? (
            <PaymentCartCard handleSteps={handleSteps} />
          ) : steps === "OrderCompleted" ? (
            <OrderPlacedCard
              handleSteps={handleSteps}
              steps={steps}
              Cart={Cart}
              paymentMethod={paymentMethod}
              address={addressFormData}
              user={user}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
