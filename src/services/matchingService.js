import { instructors } from "../data/instructors";

export const findInstructor = () => {
  return instructors.find((i) => i.available);
};
