import { useNavigate } from "react-router-dom";

const UserComponent = ({ name, image }: { name: string; image: string }) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    localStorage.setItem("selectedUser", JSON.stringify({ name, image }));
    navigate("/home");
  };

  return (
    <div
      className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={handleUserClick}
    >
      <img
        src={image}
        alt={name}
        className="flex items-center justify-center w-15% h-15% border-1 border-gray-300 shadow-lg"
      />
      <h1 className="mt-8 text-3xl font-bold">{name}</h1>
    </div>
  );
};

export default UserComponent;
