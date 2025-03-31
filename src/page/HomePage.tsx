import WeekComponent from "../components/question/WeekComponent";
import { weeks } from "../constans/weeks";
const HomePage = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-700 mt-40">JS 문제 스케줄</h1>
      <div className="w-full grid grid-cols-2 gap-4 p-20">
        {weeks.map((week) => (
          <WeekComponent key={week.id} week={week} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
