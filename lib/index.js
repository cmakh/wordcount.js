/**
 * @param {string} target The string to get word count of
 * @returns {number} words The wordcount of the string
 * @description Count the number of words in the supplied string
 */
module.exports = function (target) {
    if(typeof target !== 'string') throw new Error('target must be a string');
    return target.split(/ +/g).length;
}

/**
 * @param {array} targets An array of strings to be word counted
 * @returns {array} counts An array of the word counts of the supplied strings
 * @description Count the number of words in each string in the supplied array (returns an array of numbers)
 */
module.exports.countMultiple = function (targets) {
    if(!Array.isArray(targets)) throw new Error('targets must be an array');
    var counts = [];
    targets.forEach(target => {
        if(typeof target !== 'string') throw new Error('one or more values in supplied array were not strings');
        counts.push(module.exports(target));
    });
    return counts;
}