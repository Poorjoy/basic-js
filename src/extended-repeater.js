module.exports = function repeater(str, options) {
    var result;
    options = {
        repeatTimes: 'repeatTimes' in options ? options.repeatTimes : 1,
        separator: 'separator' in options ? options.separator : '+',
        addition: 'addition' in options ? options.addition : '',
        additionRepeatTimes: 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1,
        additionSeparator: 'additionSeparator' in options ? options.additionSeparator : '|',
    };
    var addSep = options.addition + options.additionSeparator;
    var addRep = addSep.repeat(options.additionRepeatTimes - 1) + options.addition;
    var newStr = str + addRep + options.separator;
    result = newStr.repeat(options.repeatTimes - 1) + str + addRep;
    return result;
};
  