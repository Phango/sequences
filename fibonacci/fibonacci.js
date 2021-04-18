exports.byCount = (count) => {
  let out = [1, 1]
  let i = 2;

  if (count > 0 && count < 2) return out

  while (i < count) {
    out.push(out[i-2] + out[i-1])
    i++
  }

  return out

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

const byN = (num) => {
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
exports.byN = byN

const recursiveByN = (num) => {
  if (num <= 1) return 1
  return recursiveByN( num - 1 ) + recursiveByN( num - 2 )
}
exports.recursiveByN = recursiveByN

const memoByN = (num, memo) => {
  memo = memo || {}

  if (memo[num]) return memo[num]
  if (num <= 1) return 1
  
  return memo[num] = memoByN(num - 1, memo) + memoByN(num - 2, memo)
}
exports.memoByN = memoByN
