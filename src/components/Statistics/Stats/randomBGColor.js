function makeRandomNumber(max, min) {
  const random = Math.random() * (max - min) + min;
  const number = Math.round(random).toString();
  return number;
}

export { makeRandomNumber };
