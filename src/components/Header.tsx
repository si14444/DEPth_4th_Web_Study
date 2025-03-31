import { useNavigate } from "react-router-dom";
import { User } from "../types/user";

const Header = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-md z-10 border-gray-200">
      {/* 왼쪽 영역 - 로고와 제목 */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">J</span>
        </div>
        <h1 className="text-2xl font-bold text-blue-700">JS 문제 업로더</h1>
      </div>

      {/* 중앙 영역 - 네비게이션 메뉴 */}
      {/* <div className="md:flex items-center justify-center space-x-6 text-lg">
        <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
          홈
        </span>
        <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
          갤러리
        </span>
        <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">
          정보
        </span>
      </div> */}

      {/* 오른쪽 영역 - 사용자 정보 */}
      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
        <img
          src={user?.image}
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
        />
        <h1 className="text-lg font-medium text-gray-800">{user?.name}</h1>
      </div>
    </div>
  );
};

export default Header;
