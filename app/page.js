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
    <main className="w-full flex flex-wrap justify-evenly">
      <Navbar />
      <div className="w-full py-3">
        <Add setQues={setQues} />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {loading ? (
          <CircularProgress />
        ) : ques.length == 0 ? (
          <div> No Question To Show!!</div>
        ) : (
          ques.map((q) => (
            <div key={q.id}>
              <FlipCard question={q.question} answer={q.answer} id={q.id} />
            </div>
          ))
        )}
      </div>
    </main>
  );
}
