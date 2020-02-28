module.exports = function countCats(matrix) {
    var sum = matrix.flat().map(cat => cat === '^^' ? 1 : 0).reduce((a, c) => a + c, 0);
    return sum;
};