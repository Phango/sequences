var Range = require('../range/range');
var range = new Range();

class Prime {
  byCount(count) {
    var array = [];
    var i = 0;
    while (array.length < count) {
      if (this.isPrime(i)) {
        array.push(i);
      }
      i++;
    }
    return array;
  }

  byMax(max) {
    var array = [];
    var i = 0;
    while (i <= max) {
      if (this.isPrime(i)) {
        array.push(i);
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
    return num > 1 ;
  }
}

module.exports = Prime;
