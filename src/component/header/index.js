import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { CiShoppingCart, CiHome } from "react-icons/ci";

export default function AppHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log("pathname", pathname)
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.header_heading}>
          {pathname === "/ecommerce-assignment" ? (
            <h1>All Products Page</h1>
          ) : (
            <h1>{pathname.split("/")[1] + " Page"}</h1>
          )}
        </div>
        <div className={styles.header_icons}>
          {pathname === "/ecommerce-assignment" ? (
            <CiShoppingCart onClick={() => navigate("/ecommerce-assignment/cart")} />
          ) : (
            <CiHome onClick={() => navigate("/ecommerce-assignment")} />
          )}
        </div>
      </div>
    </div>
  );
}
