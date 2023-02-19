const nativeCeil = Math.ceil,
  nativeMax = Math.max;

const baseRange = (start: number, end: number, step = 1) => {
  let index = -1,
    length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
    result = Array(length);

  while (length--) {
    result[++index] = start;
    start += step;
  }
  return result;
};

export default baseRange;
