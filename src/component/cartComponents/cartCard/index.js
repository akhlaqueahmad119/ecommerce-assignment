import styles from "./styles.module.scss";

function CartCard({ productName, productId, quantity, price, imgUrl }) {
  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCard_productImage}>
        {imgUrl && <img src={imgUrl} />}
      </div>
      <div className={styles.cartCard_productContent}>
        <div className={styles.cartCard_productName}>
          {productName && <h3>{productName}</h3>}
        </div>
        <div className={styles.cartCard_productPrice}>
        {quantity && price && (
            <p>
              {quantity} x ${price}
            </p>
          )}
          {quantity && price && <h3>$ {price * quantity}</h3>}
          
        </div>
      </div>
    </div>
  );
}

export default CartCard;
