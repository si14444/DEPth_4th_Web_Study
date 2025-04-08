import { userList } from "../constans/user";
export const getUserName = (userId: number) => {
  return userList.find((user) => user.id === userId);
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
