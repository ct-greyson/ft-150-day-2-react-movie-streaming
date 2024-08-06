import { useState } from "react";
import TestComponent from "./components/TestComponent";
import UserContext from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { store } from "./store";
import { Provider } from "react-redux";
import WatchList from "./components/WatchList";

function App() {
  const [user, setUser] = useState({ name: "", isLoggedIn: false });

  return (
    <>
      {/* <TestComponent count={count} person={person}/> */}

      {/* Everything inside our UserContext.Provider will have access to the user state */}
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watch-list" element={<WatchList />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;
