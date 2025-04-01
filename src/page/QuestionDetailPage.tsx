import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../types/question";
import { getUser } from "../utils/user";

const QuestionDetailPage = () => {
  const dummyQuestion: Question = {
    id: 1,
    title: "질문",
    userId: 1,
    date: "2021-01-01",
    answer: "정답",
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const isOwner = currentUser?.id === dummyQuestion.userId;

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleEdit = () => {
    navigate(`/question/write/${dummyQuestion.id}`);
  };

  return (
    <div className="flex w-screen h-screen flex-col items-center mt-40 p-8 md:p-20">
      <div className="flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 질문 영역 */}
        <div className="p-8 border-b border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {dummyQuestion.title}
            </h1>

            {/* 수정 버튼 추가 - 작성자인 경우에만 표시 */}
            {isOwner && (
              <button
                onClick={handleEdit}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                수정하기
              </button>
            )}
          </div>

          {/* 유저 정보 */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <span className="font-medium mr-1">작성자:</span>
              {getUser(dummyQuestion.userId)?.name}
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {dummyQuestion.date}
            </div>
          </div>
        </div>

        {/* 정답 버튼 영역 */}
        <div className="p-4 flex justify-center">
          <button
            onClick={() => setIsAnswerVisible(!isAnswerVisible)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
              isAnswerVisible
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-600 shadow-sm"
            }`}
          >
            <span>{isAnswerVisible ? "정답 숨기기" : "정답 보기"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${
                isAnswerVisible ? "rotate-180" : ""
              }`}
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
          </button>
        </div>

        {/* 정답 영역 */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isAnswerVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-8 bg-white">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">정답</h2>
            <div className="text-gray-600 p-4 bg-gray-50 rounded-lg border border-gray-100">
              {dummyQuestion.answer}
            </div>
          </div>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
        >
          ← 목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
