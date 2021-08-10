export const DateConverter = (dateString) => {
  const date = new Date(dateString);

  const ConvertedDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const Time = dateString.match(/\d\d:\d\d/)[0];

  return IsToday(date) ? `Today at ${Time}` : ConvertedDate;
};

const IsToday = (someDate) => {
  const today = new Date();

  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};
