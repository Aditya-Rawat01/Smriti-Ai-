"use client";
import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizFinalResult from "./QuizResult";

const quizData = [
  {
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Automated Input", "Advanced Integration", "None"],
    answer: "Artificial Intelligence",
  },
  {
    question: "What is the output of 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: "4",
  },
  {
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Automated Input", "Advanced Integration", "None"],
    answer: "Artificial Intelligence",
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Vue", "Next.js", "Laravel"],
    answer: "Laravel",
  },
  {
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Automated Input", "Advanced Integration", "None"],
    answer: "Artificial Intelligence",
  },
  // add more questions
];

export default function QuizContainer() {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
  
    const total = quizData.length;
    const progress = ((currentQ + (submitted ? 1 : 0)) / total) * 100;
  
    const handleSubmit = () => {
        if (selected === quizData[currentQ].answer) {
          setScore((prev) => prev + 1);
        }
      
        // Move to next or end
        if (currentQ < total - 1) {
          setCurrentQ((prev) => prev + 1);
          setSelected(null);
        } else {
          setCurrentQ((prev) => prev + 1); // move beyond last question to show final screen
        }
      };
      
  
    const handleNext = () => {
      setSelected(null);
      setSubmitted(false);
      setCurrentQ((prev) => prev + 1);
    };
  
    const isLast = currentQ === total - 1;
  
    return (
        <div className="bg-zinc-900 rounded-xl p-6 shadow-xl">
      
          {/* Progress Bar */}
          <div className="w-full mb-6">
            <div className="w-full h-2 bg-zinc-700 rounded-full">
              <div
                className="h-2 bg-lime-400 rounded-full transition-all duration-300"
                style={{ width: `${(currentQ / total) * 100}%` }}
              />
            </div>
            {currentQ < total && (
              <p className="text-sm text-right mt-1 text-gray-400">
                Question {currentQ + 1} of {total}
              </p>
            )}
          </div>
      
          {/* Show quiz or result */}
          {currentQ < total ? (
            <>
              <QuizQuestion
                question={quizData[currentQ].question}
                options={quizData[currentQ].options}
                selected={selected}
                setSelected={setSelected}
              />
      
              <div className="mt-6 text-right">
                <button
                  onClick={handleSubmit}
                  disabled={!selected}
                  className="bg-lime-400 text-black px-4 py-2 rounded hover:bg-lime-300"
                >
                  {currentQ === total - 1 ? "Finish Quiz" : "Next"}
                </button>
              </div>
            </>
          ) : (
            <QuizFinalResult score={score} total={total} />
          )}
        </div>
      );
      
  }