module.exports = {
  getScaleBySize: function (size) {
    // group by size range
    let scale;
    
    const s = 1000;
    const m = 10_000;
    const l = 100_000;
    const xl = 1_000_000;

    if (size <= m) {
      scale = s;
    } else if (size <= l) {
      scale = m;
    } else if (size <= xl) {
      scale = l;
    } else {
      scale = xl;
    }

    return scale;
  },
};
