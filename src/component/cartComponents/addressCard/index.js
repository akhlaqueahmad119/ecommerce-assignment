import { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setAddress } from "../../../redux/slice/cart";

function AddressCartCard({ handleSteps }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    address: "",
    phoneNumber: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setAddress(formData));
    handleSteps("PaymentCart");
  };

  return (
    <div className={styles.addressCard}>
      <form onSubmit={handleSubmit}>
        <div className={styles.addressCard_inputs}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label>Phone Number:</label>

          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <label>Address:</label>
          <textarea
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddressCartCard;
