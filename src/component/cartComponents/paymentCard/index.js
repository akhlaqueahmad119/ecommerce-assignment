import { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "../../../redux/slice/cart";

function PaymentCartCard({ handleSteps }) {
  const dispatch = useDispatch();
  const [payment, setPayment] = useState("cash");

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPaymentMethod(payment));
    handleSteps("OrderCompleted");
  };

  return (
    <div className={styles.paymentCartCard}>
      <div className={styles.paymentCardContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                name="paymentMethod"
                type="radio"
                value="cash"
                checked={payment === "cash"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
          </div>
          <div>
            <label>
              <input
                name="paymentMethod"
                type="radio"
                value="credit"
                checked={payment === "credit"}
                onChange={handleChange}
              />
              Credit Card
            </label>
          </div>
          <div>
            <label>
              <input
                name="paymentMethod"
                type="radio"
                value="debit"
                checked={payment === "debit"}
                onChange={handleChange}
              />
              Debit Card
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentCartCard;
