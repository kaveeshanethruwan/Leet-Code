// 58. Length of Last Word

var lengthOfLastWord = function (s) {
  return s.trim().split(" ").at(-1).length;
};
