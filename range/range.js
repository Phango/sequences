class Range {
  byCount(start, count) {
    return Array.apply(0, Array(count))
      .map(function (element, index) {
        return index + start;
    });
  }
}

module.exports = Range;
