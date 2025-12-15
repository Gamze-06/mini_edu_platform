import { users } from "../data/users";

export const login = (email) => {
  const user = users.find((u) => u.email === email);
  if (!user) return null;

  localStorage.setItem("authUser", JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem("authUser");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
};
