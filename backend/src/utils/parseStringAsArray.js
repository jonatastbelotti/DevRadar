module.exports = function parseStringAsArray(arrayString) {
    return arrayString.split(",").map(t => t.trim());
};