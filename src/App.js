import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Matriz from "./Components/Matriz/Matriz";
import Seminars from "./Components/Seminars/Seminars";
import SeminarObject from "./Components/Registers/SeminarObject";
import Axios from "axios";
import './App.css';

function App() {

  const [auth, setAuth] = useState({
    status: true,
    user: { "_id": "6408e44db3f1a4b2fb247b6d", "username": "livraria.maanaim.portoalegre@gmail.com", "name": "Maanaim POA/RS", "cnpj": "27.056.910/2398-70", "phone": 5191853463, "description": "Maanaim fundado em 2016, estamos no coração do estado do Rio Grande do Sul, onde a Obra avança com firmeza nas promessas de Deus  ", "verse": "Daquele dia em diante, enquanto a metade dos meus homens fazia o trabalho, a outra metade permanecia armada de lanças, escudos, arcos e couraças. Os oficiais davam apoio a todo o povo de Judá que estava construindo o muro. Aqueles que transportavam material faziam o trabalho com uma mão e com a outra seguravam uma arma. Neemias 4:16,17", "zipCode": "90650-070", "adress": "R. Plácido de Castro, 245 - Azenha, Porto Alegre - RS, 90650-070", "websiteURL": "https://www.igrejacristamaranata.org.br/", "__v": 0, "city": "Porto Alegre", "state": "RS", "pastor": "Ricardo Medeiros" },

  });


/*   useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: `${process.env.REACT_APP_BACK_SERVER_LOCATION}/auth`,
    }).then((res) => {
      setAuth(res.data || process.env.REACT_APP_DEVELOPMENT_MODE);
    });
  }, []) */


  return (
    <BrowserRouter> <div >
      <header className="App-header">
        <Matriz>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/seminars" exact element={<Seminars />} />
            {auth.status && <Route path="/register/seminars/:thenewobject" exact element={<SeminarObject user={auth.user} />} />}
          </Routes>
        </Matriz>
      </header>
    </div> </BrowserRouter>
  );
}

export default App;
