"use client";
import FlipCard from "@/components/FlipCard/FlipCard";
import Navbar from "@/components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Add from "../components/Add";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [idDelete, setIdDelete] = useState([]);
  useEffect(() => {
    const fetchAllQues = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://qna-backend-fx77.onrender.com/question"
        );
        setQues(res.data);
        setLoading(false);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllQues();
  }, []);
  return (
    <div>
      <main className="w-full flex flex-wrap justify-evenly">
        <Navbar />
        <div className="w-full py-3">
          <Add setQues={setQues} count={count} id={idDelete} />
        </div>

        <div className="flex flex-wrap justify-evenly">
          {loading ? (
            <CircularProgress />
          ) : ques.length == 0 ? (
            <div> No Question To Show!!</div>
          ) : (
            ques.map((q) => (
              <div key={q.id}>
                <FlipCard
                  question={q.question}
                  answer={q.answer}
                  id={q.id}
                  setCount={setCount}
                  setIdDelete={setIdDelete}
                />
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

// https://qna-backend-fx77.onrender.com/
