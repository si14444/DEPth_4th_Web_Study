import QuestionComponent from "../components/question/QuestionComponent";
import { QuestionList } from "../types/question";

const DummyQuestionList: QuestionList = {
  weekId: 1,
  questions: [
    {
      id: 1,
      title: "자바스크립트에서 호이스팅(Hoisting)이란 무엇인가요?",
      answer:
        "호이스팅은 변수와 함수 선언이 코드의 최상단으로 끌어올려지는 것을 의미합니다. var로 선언된 변수와 함수 선언문이 해당됩니다.",
      description:
        "변수나 함수를 선언하기 전에 console.log를 찍어보세요. var로 선언한 변수는 undefined가 출력되지만, let과 const로 선언한 변수는 참조 에러가 발생할 거예요. 이것이 바로 호이스팅의 증거입니다!",
      userId: 1,
      date: "2025-03-30",
    },
    {
      id: 2,
      title: "클로저(Closure)의 개념과 활용 사례를 설명해주세요.",
      answer:
        "클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 것을 의미합니다. 주로 데이터 프라이버시, 상태 관리 등에 활용됩니다.",
      userId: 2,
      date: "2025-03-30",
    },
    {
      id: 3,
      title: "클로저(Closure)의 개념과 활용 사례를 설명해주세요.",
      answer:
        "클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 것을 의미합니다. 주로 데이터 프라이버시, 상태 관리 등에 활용됩니다.",
      userId: 2,
      date: "2025-03-30",
    },
    {
      id: 4,
      title: "클로저(Closure)의 개념과 활용 사례를 설명해주세요.",
      answer:
        "클로저는 내부 함수가 외부 함수의 변수에 접근할 수 있는 것을 의미합니다. 주로 데이터 프라이버시, 상태 관리 등에 활용됩니다.",
      userId: 2,
      date: "2025-03-30",
    },
  ],
};

const QuestionPage = () => {
  return (
    <div className="flex w-screen flex-col items-center mt-40 p-10">
      <div className="flex justify-end w-full mb-4">
        <button className="border-1 border-blue-700 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer">
          질문 작성
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full ">
        {DummyQuestionList.questions.map((question) => (
          <QuestionComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
