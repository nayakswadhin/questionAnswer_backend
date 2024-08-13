"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Update({ params }) {
  const router = useRouter();
  const [ques, setQue] = useState("");
  const [ans, setAns] = useState("");
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(
          "https://qna-backend-fx77.onrender.com/question/" + params.questionid
        );
        setQue(res.data[0].question);
        setAns(res.data[0].answer);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestion();
  }, [params.questionid]);
  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .put(
        "https://qna-backend-fx77.onrender.com/question/" + params.questionid,
        {
          question: ques,
          answer: ans,
        }
      )
      .then(() => {
        router.push("/");
      });
  };
  return (
    <div>
      <div className="m-4 font-bold text-3xl text-center">UPDATE QUESTION</div>
      <form
        action=""
        className="text-center flex flex-col items-center font-headertxt text-xl pt-4 w-full"
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
            className="border-solid border-2 border-black bg-slate-300 px-3 py-1 rounded-2xl m-4"
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
            className="border-solid border-2 border-black bg-slate-300 px-3 py-1 rounded-2xl m-2"
          />
        </div>
        <div className="px-4">
          <input
            type="submit"
            value="Update Ques"
            onClick={handleClick}
            className="m-4 border-solid border-2 border-black bg-yellow-500 cursor-pointer px-3 py-1 rounded-2xl hover:bg-sky-500"
          />
        </div>
      </form>
    </div>
  );
}

export default Update;
