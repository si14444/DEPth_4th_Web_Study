import { useState } from "react";
import NewWeekModal from "../components/home/NewWeekModal";
import WeekComponent from "../components/question/WeekComponent";
import { useWeek } from "../hooks/useWeek";
import { Week } from "../types/weeks";
const HomePage = () => {
  const { data: weeks, isLoading, isError, error } = useWeek();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(weeks);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-blue-600">주차 데이터를 불러오는 중...</p>
      </div>
    );
  }

  if (isError) {
    console.error("데이터 로딩 오류:", error);
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-red-500 text-center p-4">
          <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-screen flex-col items-center p-20 justify-center">
      <h1 className="text-3xl font-bold text-blue-700 mt-40 mb-6">
        JS 문제 스케줄
      </h1>

      {/* 주차 목록 헤더 영역 - 버튼 추가 */}
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-500 font-medium">{weeks?.length || 0}개 주차</p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>주차 추가</span>
        </button>
      </div>

      {/* 주차 목록 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        {weeks?.map((week: Week) => (
          <WeekComponent key={week.id} week={week} />
        ))}
      </div>

      {/* 주차가 없을 때 메시지 */}
      {(!weeks || weeks.length === 0) && (
        <div className="text-center py-10 text-gray-500">
          <p>등록된 주차가 없습니다. 새 주차를 추가해보세요.</p>
        </div>
      )}

      {/* 추가 모달 */}
      {isModalOpen && <NewWeekModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default HomePage;
