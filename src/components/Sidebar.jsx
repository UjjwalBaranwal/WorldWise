import { Outlet } from "react-router";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* <p>List of cities</p> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
