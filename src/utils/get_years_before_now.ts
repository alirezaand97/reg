import toJalaliMoment from "./to_jalali_moment";
import moment from "moment-jalaali";
const getYearsBeforeNow = () => {
  const thisYear = new Date();
  console.log(toJalaliMoment("1401/06/13").jYear());
  // const yearsBeforeNow = Array.from(Array(120).keys()).map((_, index) => {
  //   let year: { label?: string | number; value?: string | number } = {};
  //   year.label = thisYear - index;
  //   year.value = thisYear - index;
  // return year;
  // });

  return "yearsBeforeNow";
};

export default getYearsBeforeNow;
