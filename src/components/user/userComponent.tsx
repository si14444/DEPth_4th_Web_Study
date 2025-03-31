import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";

const UserComponent = ({ user }: { user: User }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div
      className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleUserClick}
    >
      <img
        src={user.image}
        alt={user.name}
        className="flex items-center justify-center w-15% h-15% border-1 border-gray-300 shadow-lg"
      />
      <h1 className="mt-8 text-3xl font-bold">{user.name}</h1>
    </div>
  );
};

export default UserComponent;
