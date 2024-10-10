import axios from "axios";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Add({ setQues, count, id }) {
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

  const handleDeleteAll = async () => {
    console.log(id);
    await axios
      .delete("https://qna-backend-fx77.onrender.com/questions/", {
        data: id,
      })
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(ques);
  return (
    <div className="text-center md:flex items-center justify-center font-headertxt text-xl">
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
      <button
        onClick={handleDeleteAll}
        className="border-2 border-solid border-black rounded-2xl px-3 py-1 bg-red-500 hover:bg-red-800"
      >
        Delete
        <DeleteIcon />({count})
      </button>
    </div>
  );
}

export default Add;
