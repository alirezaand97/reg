export function convertSecondsToTime(seconds: number) {
  const h = Math.floor(seconds / 360);
  let s = seconds % 360;
  const m = Math.floor(s / 60);
  s = seconds % 60;
  return `${h > 0 ? (h > 9 ? h : `0${h}:`) : ""}${m > 9 ? m : `0${m}`}:${
    s > 9 ? s : `0${s}`
  }`;
}
