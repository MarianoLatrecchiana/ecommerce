import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <link to="/">
        <h3>Tienda Play</h3>
      </link>
      <div className="Categories">
      <NavLink to={`/category/Consolas`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Consolas</NavLink>
      <NavLink to={`/category/Juegos`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Juegos</NavLink>
      <NavLink to={`/category/Accesorios`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}> Accesorios</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
