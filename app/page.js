"use client";
import FlipCard from "@/components/FlipCard/FlipCard";
import Navbar from "@/components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Add from "../components/Add";

export default function Home() {
  const [ques, setQues] = useState([]);
  useEffect(() => {
    const fetchAllQues = async () => {
      try {
        const res = await axios.get("http://localhost:8080/question");
        setQues(res.data);
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
        {ques.map((q) => (
          <div key={q.id}>
            <FlipCard question={q.question} answer={q.answer} id={q.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
