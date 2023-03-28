import "./App.css";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from "./components/ItemList/ItemList";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount
        initial={1}
        stock={10}
        onadd={(quantity) => console.log("Cantidad Agregada", quantity)}
      />
    </div>
  );
}

export default App;
