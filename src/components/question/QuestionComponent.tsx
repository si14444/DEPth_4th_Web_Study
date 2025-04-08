import { useNavigate } from "react-router-dom";
import { Question } from "../../types/question";
import { getUserName } from "../../utils/user";
const QuestionComponent = ({
  question,
  weekId,
}: {
  question: Question;
  weekId: number;
}) => {
  //   const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const maxTitleLength = 20; // 질문 제목 최대 길이
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log(currentUser?.id, question.userId);
    // if (currentUser?.id === question.userId) {
    navigate(`/questionDetail/${question.id}?weekId=${weekId}`);
    // } else {
    //   alert("본인 질문만 수정할 수 있습니다.");
    // }
  };

  return (
    <div
      className="flex flex-col justify-between shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300"
      onClick={handleClick}
    >
      <div className="text-2xl font-bold">
        {question.title.length > maxTitleLength
          ? `${question.title.slice(0, maxTitleLength)}...`
          : question.title}
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-sm text-gray-500">
          {getUserName(question.userId)?.name}
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
          <div className="text-sm text-gray-500">{question.date}</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
