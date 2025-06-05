import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
