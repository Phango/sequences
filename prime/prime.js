var Range = require('../range/range');
var range = new Range();

class Prime {
  byCount(count) {
    var array = [];
    var c = array.length;
    var i = 0;
    while (c < count) {
      if (this.isPrime(i)) {
        array.push(i);
        c = array.length;
      }
      i++;
    }
    return array;
  }

  isPrime(num) {
    for(var i = 2; i <= Math.sqrt(Math.floor(num)); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num >= 1 ;
  }
}

module.exports = Prime;
