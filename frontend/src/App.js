import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css'
const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  //in the routes, I am passing showAlert as the prop so that I can use alert functionality easily
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            {localStorage.getItem("token") ? <Route exact path="/" element={<Home showAlert={showAlert} />} /> : <Route exact path="/" element={<Login showAlert={showAlert} />} />}
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
};

export default App;