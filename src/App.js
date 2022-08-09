import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login  from "./pages/Login/Login"
import CreateProduct from "./pages/Create User/CreateProduct";
import ListProduct from "./pages/List Product/ListProduct"
import UpdateProduct from "./pages/Update Product/UpdateProduct";
import AddProduct from "./pages/Add Product/AddProduct";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/create-product" element={<CreateProduct/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/update-product" element={<UpdateProduct/>}/>
        <Route path="/delete-product" element={<ListProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
