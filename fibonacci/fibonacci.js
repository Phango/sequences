var sequences = require('./sequences.js');

exports.sequence = (num) => {
  var array = [1,1];

  if (num > 2) {
    var i = 2;
    while (i < num) {
      array.push(array[i-2] + array[i-1]);
      i++;
    }
  }
  return array;
}

exports.upTo = (num) => {
  var array = [1, 1];
  var nextElement = 0;
  var i = 2;
  do {
    nextElement = array[i-2] + array[i-1];
    if (nextElement <= num) {
        array.push(nextElement);
    }
    i++;
  } while (nextElement <= num);

  return array;
}
