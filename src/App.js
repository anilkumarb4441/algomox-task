import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes.js";
import './App.css';
import Navbar from "./components/navbar/navbar.js";
import Login from "./components/Login/login.js";


const loading = (
  <div className="webLoader">
    <div className="webLoader_spinner">Loading ........</div>
  </div>
);

function App() {


  let authenticate = localStorage.getItem('user')

  const Wrapper = () => {
    return useRoutes(routes);
  };

  return (
    <div className="App">
    { !authenticate? <>
      <Login />
      </>:
     <>
     <Navbar />
    <React.Suspense fallback={loading}>
      <Wrapper />
    </ React.Suspense>
     </>}
  </div>
  );
}

export default App;
