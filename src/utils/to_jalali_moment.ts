import moment, { Moment } from "moment-jalaali";

const toJalaliMoment = (d: string): Moment => {
  const m = moment(d, "jYYYY/jMM/jDD");
  return m;
};

export default toJalaliMoment;
