import UserComponent from "../components/user/userComponent";
import { userList } from "../constans/user";

const UserPage = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-10 cursor-pointer">
      {userList.map((user) => (
        <UserComponent key={user.name} name={user.name} image={user.image} />
      ))}
    </div>
  );
};

export default UserPage;
