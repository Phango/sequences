exports.byCount = (count) => {
  var array = [1,1];

  if (count > 2) {
    var i = 2;
    while (i < count) {
      array.push(array[i-2] + array[i-1]);
      i++;
    }
  }
  return array;
}

exports.byMaxValue = (max) => {
  var array = [1, 1];
  var nextElement = 0;
  var i = 2;
  do {
    nextElement = array[i-2] + array[i-1];
    if (nextElement <= max) {
        array.push(nextElement);
    }
    i++;
  } while (nextElement <= max);

  return array;
}
