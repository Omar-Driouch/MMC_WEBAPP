export const dateFormat = (dateTarget) => {
  const date = new Date(dateTarget);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = ("0" + date.getDate()).slice(-2);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  return {day , month:months[month] , year , hours , minutes}
  // return `${day} ${months[month]} , ${year}    ${hours}:${minutes}`;
};
