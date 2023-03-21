import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Tienda Play</h3>
      <div>
        <button>Consolas</button>
        <button>Accesorios</button>
        <button>Juegos</button>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
