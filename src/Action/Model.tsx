export const changeModel = (data: object) => {
  return {
    type: "action",
    action: "CHANGE",
    data: data,
  };
};
