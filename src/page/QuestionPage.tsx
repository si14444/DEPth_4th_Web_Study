import { useNavigate, useParams } from "react-router-dom";
import QuestionComponent from "../components/question/QuestionComponent";
import { useQuestion } from "../hooks/useQuestion";

const QuestionPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: questions } = useQuestion();

  const filteredQuestion = questions?.find(
    (question) => question.weekId === Number(id)
  );
  return (
    <div className="flex w-screen flex-col items-center mt-40 p-10">
      <div className="flex justify-end w-full mb-4">
        <button
          onClick={() => navigate("/question/write")}
          className="border-1 border-blue-700 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer"
        >
          질문 작성
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full ">
        {filteredQuestion?.questions.map((question) => (
          <QuestionComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
