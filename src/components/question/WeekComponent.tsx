import { useNavigate } from "react-router-dom";
import { Week } from "../../types/weeks";

const WeekComponent = ({ week }: { week: Week }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-start relative border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg rounded-lg p-6 bg-white transition-all duration-300 h-full cursor-pointer"
      onClick={() => navigate(`/question/${week.id}`)}
    >
      {/* 주차 제목 */}
      <div className="text-2xl font-bold text-blue-700 pb-2 border-b border-gray-100">
        {week.name}
      </div>

      {/* 주제 목록 */}
      <div className="flex flex-col  mt-4 flex-grow">
        {week.topic ? (
          week.topic.map((topic) => (
            <div
              key={topic.id}
              className="py-2 px-3 my-1 bg-blue-50 rounded-md "
            >
              <div className="font-medium text-gray-800">{topic.name}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500 italic">등록된 주제가 없습니다</div>
        )}
      </div>

      {/* 날짜 영역 */}
      <div className="flex items-center mt-4 pt-3 border-t border-gray-100">
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
        <div className="text-sm text-gray-500">{week.date}</div>
      </div>
    </div>
  );
};

export default WeekComponent;
