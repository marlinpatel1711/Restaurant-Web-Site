import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import{About} from "./pages/About";
import { Menu } from "./pages/Menu";
import {Contact} from "./pages/Contact"
import {PageNotFount} from "./pages/PageNotFount"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Menu" element={<Menu></Menu>}></Route>
        <Route path="/contant" element={<Contact></Contact>}></Route>
        <Route path="/*" element={<PageNotFount></PageNotFount>}></Route>        
      </Routes>
    </div>
  );
}

export default App;
