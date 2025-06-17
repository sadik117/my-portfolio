import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./layout/NavBar";
import Headroom from "react-headroom";
import Footer from "./layout/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="max-w-[1920px] mx-auto">
      <Headroom>
        <NavBar></NavBar>
      </Headroom>

      <Outlet></Outlet>
      {pathname !== "/" && <Footer></Footer>}
    </div>
  );
}

export default App;
