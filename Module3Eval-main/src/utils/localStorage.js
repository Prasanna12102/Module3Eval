export const getData = () =>
  JSON.parse(localStorage.getItem("evalData")) || [];

export const saveData = (data) =>
  localStorage.setItem("evalData", JSON.stringify(data));
