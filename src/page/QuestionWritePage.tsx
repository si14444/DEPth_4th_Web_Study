import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QuestionWritePage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSave = () => {
    console.log(question, answer);
  };

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      setQuestion(id);
    }
  }, [id]);

  return (
    <div className="flex w-screen flex-col p-50">
      <div className="flex flex-col justify-center w-full mb-4 bg-gray-100 rounded-lg shadow-md p-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">
            Upload Your JavaScript Question
          </h1>
          <div className="flex flex-col mt-10 justify-center">
            <label className="text-md font-bold">문제</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="문제 입력"
              rows={2}
              className="border-1 resize-none border-gray-300 rounded-md p-2 mt-2 bg-white"
            />
            <label className="text-md font-bold mt-10">정답</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="정답 입력"
              rows={5}
              className="border-1 resize-none border-gray-300 rounded-md p-2 mt-2  bg-white"
            />
            <button
              onClick={() => {
                handleSave();
              }}
              className="bg-blue-500 text-white p-2 rounded-md mt-10 cursor-pointer hover:bg-blue-600 transition-all duration-300"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionWritePage;
