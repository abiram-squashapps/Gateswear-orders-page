import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContextProvider from "./store/ContextProvider";
import Buyers from "./views/Buyers/Buyers";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <ContextProvider>
          <Navbar />
          <Buyers />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
