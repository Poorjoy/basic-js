module.exports = function createDreamTeam(members) {
    if (!members || !members.flat) {
        return false;
    }
    ;
    var teamName = members.map(name => typeof name === 'string' ? name.trim().toUpperCase()[0] : '').sort().join('');
    return teamName;
};