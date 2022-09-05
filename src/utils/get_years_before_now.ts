import toJalali from "./to_jalali";
import moment from "moment-jalaali";

const getYearsBeforeNow = () => {
  const now = moment(Date.now()).format("YYYY-MM-DD");
  const thisYear = moment(now, "JYYYY-JMM-JDD").jYear();
  const yearsBeforeNow = Array.from(Array(120).keys()).map((_, index) => {
    let year: { label?: string; value?: string } = {};
    year.label = `${thisYear - index}`;
    year.value = `${thisYear - index}`;
    return year;
  });

  return yearsBeforeNow;
};

export default getYearsBeforeNow;
