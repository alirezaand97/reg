import moment, { Moment } from "moment-jalaali";

export const toJalali = (d: string): Moment => {
  const jalali = moment(d, "jYYYY-jMM-jDD");
  return jalali;
};

export default toJalali;
