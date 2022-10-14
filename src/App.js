import "./index.css";
import "./App.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Home />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;