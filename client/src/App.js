import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbar/Newnav";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Newnav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
