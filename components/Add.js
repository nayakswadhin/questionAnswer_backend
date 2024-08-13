import axios from "axios";
import React, { useState } from "react";

function Add({ setQues }) {
  const [ques, setQue] = useState("");
  const [ans, setAns] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post("https://qna-backend-fx77.onrender.com/question", {
        question: ques,
        answer: ans,
      })
      .then((res) => {
        setQues((prevQues) => [...prevQues, res.data]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(ques);
  return (
    <div>
      <form
        action=""
        className="text-center md:flex items-center justify-center font-headertxt text-xl"
      >
        <div>
          Question:{" "}
          <input
            type="text"
            name="ques"
            placeholder="Question"
            onChange={(e) => setQue(e.target.value)}
            value={ques}
            required
            className="border-solid border-2 border-black bg-slate-300 px-3 py-1 rounded-2xl"
          />
        </div>
        <div className="px-4">
          Answer:{" "}
          <input
            type="text"
            name="ans"
            placeholder="Answer"
            onChange={(e) => setAns(e.target.value)}
            value={ans}
            required
            className="border-solid border-2 border-black bg-slate-300 px-3 py-1 rounded-2xl"
          />
        </div>
        <div className="px-4">
          <input
            type="submit"
            value="Add Ques"
            onClick={handleClick}
            className="border-solid border-2 border-black bg-green-500 cursor-pointer px-3 py-1 my-2 md:my-0 rounded-2xl hover:bg-sky-500"
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
