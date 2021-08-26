import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContextProvider from "./store/ContextProvider";
import Buyers from "./views/Buyers/Buyers";
import Users from "./views/Buyers/Users/Users";
import { Route, Switch } from "react-router-dom";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const [windowWidth, setWindowWidth] = useState(892);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  useEffect(() => {
    windowWidth < 892 ? setShowSidebar(false) : console.log();
  }, [windowWidth]);
  //console.log(windowWidth);
  return (
    <div className="App">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className={showSidebar ? "main-content" : "main-content-full"}>
        <ContextProvider>
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Switch>
            <Route
              path="/Gateswear-orders-page/users"
              component={Users}
              exact
            />

            <Route path="/">
              <Buyers />
            </Route>
          </Switch>
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
