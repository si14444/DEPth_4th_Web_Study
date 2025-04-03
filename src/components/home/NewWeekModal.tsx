import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const NewWeekModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isModalOpen: boolean) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [weekName, setWeekName] = useState<string>("");
  const [weekSubjects, setWeekSubjects] = useState<string[]>([]);

  const formatDate = selectedDate?.format("YYYY-MM-DD");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formatDate);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-xl">
        <h2 className="text-xl font-bold mb-4">새 주차 추가</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="weekName" className="block mb-2">
              주차 이름
            </label>
            <input
              type="text"
              id="weekName"
              value={weekName}
              onChange={(e) => setWeekName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weekDate" className="block mb-2">
              주차 날짜
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </div>
          <div className="mb-4">
            <label htmlFor="weekDate" className="block mb-2">
              주제
            </label>
            {weekSubjects.map((subject, index) => (
              <div key={index}>
                <input
                  type="text"
                  id="weekSubject"
                  value={subject}
                  onChange={(e) => {
                    const newSubjects = [...weekSubjects];
                    newSubjects[index] = e.target.value;
                    setWeekSubjects(newSubjects);
                  }}
                />
              </div>
            ))}
          </div>
        </form>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700"
          >
            취소
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewWeekModal;
