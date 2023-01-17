// 12. Integer to Roman

var romanToInt = function (s) {
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = data[s[i]];
    const next = data[s[i + 1]];

    console.log(current, next);

    if (current < next) {
      total += next - current;
      i++;
    } else {
      total = total + current;
    }
  }

  return total;
};
