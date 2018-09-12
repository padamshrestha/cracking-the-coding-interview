function isUnique(string) {
  var count = {};

  for (var i = 0; i < string.length; i++) {
    if (!count[string[i]]) {
      count[string[i]] = 1;
    } else {
      count[string[i]]++;
    }
  };

  for (key in count) {
    return count[key] > 1 ? false : true;
  };
}
console.log(isUnique('abcde'));
console.log(isUnique('aabb'));