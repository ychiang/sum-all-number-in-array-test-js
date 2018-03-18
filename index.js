function sumItems(array) {
  return array.reduce((sum, el) => {
    return sum + (Array.isArray(el) ? sumItems(el) : el)
  }, 0);
};


module.exports = sumItems;