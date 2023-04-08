import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Matriz from "./Components/Matriz/Matriz";
import Seminars from "./Components/Seminars/Seminars";
import Axios from "axios";
import './App.css';

function App() {

  const [auth, setAuth] = useState({
    status: false,
    user: {},

  });


  useEffect(() => {

    Axios({
      method: "GET",
      withCredentials: true,
      url: `${process.env.REACT_APP_BACK_SERVER_LOCATION}/auth`,
    }).then((res) => {
       setAuth(res.data || process.env.REACT_APP_DEVELOPMENT_MODE); 

    });
  }, [])


  return (
    <BrowserRouter> <div >
      <header className="App-header">
        <Matriz>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/seminars" exact element={<Seminars />} />
          </Routes>
        </Matriz>
      </header>
    </div> </BrowserRouter>
  );
}

export default App;
