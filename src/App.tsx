import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListingsPage from "./Components/ListingsPage";
import { useState } from "react";

const App = () => {
  const [jwtToken, setJwtToken] = useState(sessionStorage.getItem("jwt"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            jwtToken ? (
              <Navigate to="/welcome" replace />
            ) : (
              <Login
                handleLogin={() => setJwtToken(sessionStorage.getItem("jwt"))}
              />
            )
          }
        ></Route>
        <Route
          path="/welcome"
          element={
            jwtToken ? (
              <>
                <ListingsPage
                  handleLogout={() =>
                    setJwtToken(sessionStorage.getItem("jwt"))
                  }
                />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
