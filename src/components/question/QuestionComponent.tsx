import { useNavigate } from "react-router-dom";
import { Question } from "../../types/question";
import { getUser } from "../utils/user";

const QuestionComponent = ({ question }: { question: Question }) => {
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
  const maxTitleLength = 20;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(currentUser?.id, question.userId);
    if (currentUser?.id === question.userId) {
      navigate(`/question/${question.id}`);
    } else {
      alert("본인 질문만 수정할 수 있습니다.");
    }
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
          {getUser(question.userId)?.name}
        </div>
        <div className="text-sm text-gray-500">{question.date}</div>
      </div>
    </div>
  );
};

export default QuestionComponent;
