// Filename - App.js
"use client";
import React, { useState } from "react";
import "./flip.css";
import axios from "axios";
import Link from "next/link";
const App = ({ question, answer, id }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleDelete = async () => {
    await axios
      .delete("https://qna-backend-fx77.onrender.com/question/" + id)
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App p-3">
      <div className="container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-content">{question}</div>
              <button className="flip-button" onClick={handleFlip}>
                See Answer
              </button>
              {/* <Link></Link>
              <button
                className="w-[150px] p-[10px] text-[16px] mt-[10px] bg-green-600 cursor-pointer border-none"
                onClick={() => handleUpdate()}
              >
                Update
              </button> */}
              <button
                className="w-[150px] p-[10px] text-[16px] mt-[10px] bg-red-600 cursor-pointer border-none"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
            </div>
            <div className="flip-card-back">
              <div className="card-content">{answer}</div>
              <button className="flip-button" onClick={handleFlip}>
                Hide Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
