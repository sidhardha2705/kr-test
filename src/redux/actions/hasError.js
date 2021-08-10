export const HasError = (error) => {
  return {
    type: "HAS_ERROR",
    error: error,
  };
};
