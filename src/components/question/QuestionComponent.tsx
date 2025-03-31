import { Question } from "../../types/question";
import { getUser } from "../utils/user";

const QuestionComponent = ({ question }: { question: Question }) => {
  const maxTitleLength = 20;
  return (
    <div className="flex flex-col justify-between shadow-md p-4 rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-300">
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
