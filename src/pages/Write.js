import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../store/til";
import styled from "styled-components";



function Write() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const word_ref = React.useRef(null);
  const mean_ref = React.useRef(null);
  const ex_ref = React.useRef(null);


  const addTIL = () => {
    const til_data = {
      word: word_ref.current.value,
      mean: mean_ref.current.value,
      ex: ex_ref.current.value,
    };


    console.log(til_data);

 
    word_ref.current.value = "";
    mean_ref.current.value = "";
    ex_ref.current.value = "";

    dispatch(add({ til_data: til_data }));
    navigate(-1);
  };

  return (
    <Container>
      <div
      className="input-area"
      style={{
        margin: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}>
         <h1>단어 추가하기</h1>
        <div>
          <span>단어</span>
          <p></p>
          <input ref={word_ref} />
        </div>

        <div>
          <span>의미</span>
          <p></p>
          <input ref={mean_ref} />
        </div>

        <div>
          <span>예문</span>
          <p></p>
          <input ref={ex_ref} />
        </div>
      </div>
      <button
          onClick={addTIL}
        >
          저장하기
        </button>
    </Container>
  );
}

export default Write;

const Container = styled.div`
  background-color: #E0FFFF;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #888;


h1 {
    border-bottom: 1px solid black;
}

button {
    border: 1px solid #ddd;
    color: white;
    padding: 5px 15px;
    font-size: 20px;
    border-radius: 2px;
    background: green;
    margin-left: 50px;
    width: 200px;
    margin: 3rem;
}
   
button:hover {
    background-color: red;
    cursor: pointer;
  }
`;
