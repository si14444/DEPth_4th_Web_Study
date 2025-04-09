import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addQuestion, updateQuestion } from "../api/question";
import CodeBlock from "../components/CodeBlock";
import { useQuestion } from "../hooks/useQuestion";
import { getFilteredQuestion } from "../utils/getFilteredQuestions";
import { getUser } from "../utils/user";

const QuestionWritePage = () => {
  // 문제 목록 가져오기
  const { data: questions } = useQuestion();
  // 주차 번호와 문제 번호 가져오기
  const [searchParams] = useSearchParams();
  const weekId = searchParams.get("weekId");
  const questionsId = searchParams.get("questionsId") || "";
  const questionId = searchParams.get("questionId") || "";
  const filteredQuestion = getFilteredQuestion(
    questions || [],
    Number(weekId),
    questionId
  );

  // 문제 정보 상태 관리
  const [question, setQuestion] = useState(filteredQuestion?.title || "");
  const [answer, setAnswer] = useState(filteredQuestion?.answer || "");
  const [code, setCode] = useState<string>(
    filteredQuestion?.code ||
      '// 여기에 JavaScript 코드를 입력하세요\nfunction example() {\n  const greeting = "안녕하세요!";\n  console.log(greeting);\n  return greeting;\n}'
  );
  const [showCodeBlock, setShowCodeBlock] = useState(false);

  const navigate = useNavigate();

  // 문제 저장
  const handleSave = () => {
    const codeContent = showCodeBlock ? code : "";
    try {
      if (questionsId === "") {
        addQuestion(
          {
            title: question,
            answer,
            code: codeContent,
            userId: getUser().id,
            date: new Date()
              .toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(/\. /g, "-")
              .replace(".", ""),
          },
          questionsId
        );
      } else {
        updateQuestion(
          {
            title: question,
            answer,
            code: codeContent,
            userId: getUser().id,
            date: new Date()
              .toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(/\. /g, "-")
              .replace(".", ""),
          },
          questionsId,
          filteredQuestion?.id || ""
        );
      }

      navigate(`/question/${weekId}`);
    } catch (error) {
      console.error("문제 저장 오류:", error);
    }
  };

  const toggleCodeBlock = () => {
    setShowCodeBlock(!showCodeBlock);
  };

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

            <button
              onClick={toggleCodeBlock}
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 border cursor-pointer border-gray-300 rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2 self-start"
            >
              {showCodeBlock ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  코드 블록 닫기
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  코드 블록 추가
                </>
              )}
            </button>

            {showCodeBlock && (
              <div className="mt-4 border border-gray-200 rounded-md bg-white">
                <CodeBlock code={code} setCode={setCode} />
              </div>
            )}

            <label className="text-md font-bold mt-10">정답</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="정답 입력"
              rows={5}
              className="border-1 resize-none border-gray-300 rounded-md p-2 mt-2 bg-white"
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
