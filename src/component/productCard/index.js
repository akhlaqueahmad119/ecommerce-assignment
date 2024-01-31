import styles from "./styles.module.scss";

function ProductCard({id, imgURL, price, title, category, description , addToCart}) {
  return (
    <div className={styles.productCard} key={id}>
      {imgURL && imgURL.length > 0 && (
        <div className={styles.productCard_image}>
          <img src={imgURL} alt="product" />
        </div>
      )}
      <div className={styles.productCard_content}>
        {price && <p>${price}</p>}
        {title && <h3>{title}</h3>}
        {category && <p>{category}</p>}
        {description && <p>{description}</p>}
      </div>
      <button onClick={()=>addToCart(id)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
