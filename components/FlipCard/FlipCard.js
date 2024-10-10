// Filename - App.js
"use client";
import React, { useState } from "react";
import "./flip.css";
import axios from "axios";
import Link from "next/link";
import { Checkbox } from "@mui/material";

const App = ({ question, answer, id, setCount, setIdDelete }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleCheck = (e, id) => {
    if (e.target.checked) {
      setIsChecked(true);
      setCount((prevCount) => prevCount + 1);
      setIdDelete((prevIds) => [...prevIds, id]);
    } else {
      setIsChecked(false);
      setCount((prevCount) => prevCount - 1);
      setIdDelete((prevIds) => prevIds.filter((itemId) => itemId != id));
    }
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

  const handleUpdate = () => {};

  return (
    <div className="App p-3">
      <div className="container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div
              className={`flip-card-front ${
                isChecked
                  ? `opacity-80 bg-[#5b7bb3]`
                  : `opacity-100 bg-[#8aaae5]`
              } text-black h-full`}
            >
              <Checkbox
                {...label}
                className="float-right"
                onChange={(e) => handleCheck(e, id)}
              />
              <div className="card-content">{question}</div>
              <button className="flip-button" onClick={handleFlip}>
                See Answer
              </button>

              <button
                className="w-[150px] p-[10px] text-[16px] mt-[10px] bg-green-600 cursor-pointer border-none"
                onClick={() => handleUpdate()}
              >
                <Link href={`/update/${id}`}>Update</Link>
              </button>
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
