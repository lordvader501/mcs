import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="flex-col flex justify-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
