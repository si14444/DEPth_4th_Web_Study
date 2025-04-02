import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";

const Header = ({ user }: { user: User }) => {
  const navigate = useNavigate();
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-md z-10 border-gray-200">
      {/* 왼쪽 영역 - 로고와 제목 */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/home")}
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
      <div
        className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <img
          src={user?.image}
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
        />
        <h1 className="text-lg font-medium text-gray-800">{user?.name}</h1>
      </div>
      {isShowMenu && (
        <div className="absolute top-20 right-6 bg-white shadow-md rounded-lg p-4">
          <button
            onClick={handleLogout}
            className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
