const getYearsBeforeNow = () => {
  const yearsBeforeNow = Array.from(Array(120).keys()).map((_, index) => {
    let year: { label?: string | number; value?: string | number } = {};
    const thisYear = new Date().getFullYear();
    year.label = thisYear - index;
    year.value = thisYear - index;
    return year;
  });

  return yearsBeforeNow;
};

export default getYearsBeforeNow;
