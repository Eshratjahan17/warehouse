import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import RequireAuth from "./Components/RequireAuth";
import SignUp from './Components/SignUp';
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
