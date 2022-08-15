export const formatTime = (date: string) => {
  let time = "";
  time = date.split("T")[1];
  time = time.split("-")[0];
  time = time.slice(0, -3);
  return time;
};
