import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemListContainer/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
