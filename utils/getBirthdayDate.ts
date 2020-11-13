const getBirthdayDate = (date: string): string => {
  const birthday = new Date(date);
  const [dayOfTheMonth, month, day, year] = birthday.toString().split(' ');

  return `${dayOfTheMonth} ${month} ${day} ${year}`;
};

export default getBirthdayDate;
