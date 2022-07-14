import React, {useEffect} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";
import {db} from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";



const diction = firestore.collection("diction");

React.useEffect(async() => {
  const query = await getDocs(collection(db, 'diction'));
  console.log(query);
  query.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}, []);



function App() {
  return (
    <div className="App" style={{ display: "flex", gap: "1rem" }}>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </div>
  );
}



export default App;
