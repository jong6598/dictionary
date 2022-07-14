import React, {useEffect} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";
import {db} from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";
import { Provider } from "react-redux";





function App() {
  return (
    <Provider style={{ display: "flex", gap: "1rem" }}>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </Provider>
  );
}



export default App;
