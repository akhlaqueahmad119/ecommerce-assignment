import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { CiShoppingCart, CiHome } from "react-icons/ci";

export default function AppHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.header_heading}>
          {pathname === "/" ? (
            <h1>All Products Page</h1>
          ) : (
            <h1>{pathname.split("/")[1] + " Page"}</h1>
          )}
        </div>
        <div className={styles.header_icons}>
          {pathname === "/ecommerce-assignment" ? (
            <CiShoppingCart onClick={() => navigate("/cart")} />
          ) : (
            <CiHome onClick={() => navigate("/ecommerce-assignment")} />
          )}
        </div>
      </div>
    </div>
  );
}
