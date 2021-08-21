import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Buyers from "./views/Buyers/Buyers";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Buyers />
      </div>
    </div>
  );
}

export default App;
