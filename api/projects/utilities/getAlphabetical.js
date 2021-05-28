module.exports = {
  getAlphabetical: function (shortTitle) {
    // get alphabetical from short title
    let alphabetical;
    const firstCharacter = shortTitle[0]
    const isANumber = parseInt(firstCharacter)

    if (isANumber >= 0 || isANumber <= 9) {
      alphabetical = "#";
    } else if (firstCharacter.toLowerCase() === "x" || firstCharacter.toLowerCase() === "y" || firstCharacter.toLowerCase() === "z") {
      alphabetical = "xyz";
    } else {
      alphabetical = firstCharacter.toLowerCase();
    }

    return alphabetical;
  },
};
