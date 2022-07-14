import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Component = styled.Type

function Main() {
  const navigate = useNavigate();
  const til_list = useSelector((store) => store.til.til_list);

  console.log(til_list);

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          padding: "1rem",
          width: "70vmin",
          backgroundColor: "#E0FFFF"
        }}
      >
        <div
          className="title-area"
          style={{
            borderBottom: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <h1>나만의 단어장</h1>
          <button
            style={{
              color: "#fff",
              background: "#065880",
              border: "none",
              borderRadius: "3rem",
              width: "3rem",
              height: "3rem",
              margin: "auto 0",
            }}
            onClick={() => {
              navigate("/write");
            }}
          >
            +
          </button>
        </div>

        <div className="til-list">
          {til_list.map((til, idx) => {
            return (
              <Wrap
                className="til-item"
                key={idx}
                style={{
                 
                }}
              >
                <div style={{
                        marginRight:"85%",
                        borderBottom: "1px solid #ccc",
                      }}>
                    <p>단어</p>
                    <p >{til.word}</p>
                </div>
                <div style={{
                        marginRight:"85%",
                      }}>
                    <p>의미</p>
                    <p>{til.mean}</p>
                </div>
                <div style={{
                        marginRight:"85%",
                      }}>
                    <p>예시</p>
                    <p
                    style={{
                        color: "blue",
                      }}>{til.ex}</p>
                </div>
              </Wrap>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;

const Wrap= styled.div`
  font-size: 15px;
  border: 2px solid #888;
  border-radius: 10px;
  margin: 2rem 0rem;
  padding: 2px;
  display: flex;
  flex-direction: column;
  background-Color: white;

`