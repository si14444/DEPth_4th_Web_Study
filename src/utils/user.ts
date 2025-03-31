import { userList } from "../constans/user";
export const getUser = (userId: number) => {
  return userList.find((user) => user.id === userId);
};
