import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContextProvider from "./store/ContextProvider";
import Buyers from "./views/Buyers/Buyers";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
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
