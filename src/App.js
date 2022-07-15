import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Protected from "./Services/Protected";
import './App.css';
import Login from "./component/Login/Login";
import Books from "./component/Login/Book/Book";
import Navbar from './component/Navbar';
import Home from './component/LandingPage'
import BookDetail from "./component/Login/Book/BookDetails";
import Users from "./component/Login/Users";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Protected Component={Books} />} />
        <Route path="/users" element={<Protected Component={Users} />} />
        <Route path="/books/details/:id" element={<Protected Component={BookDetail} />} />
      </Routes>
    </Router>
  );
}

export default App;
