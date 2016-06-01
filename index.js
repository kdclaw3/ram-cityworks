module.exports = {
    match: function (ipw, pw) {

        var hash = require('crypto').createHash('md5').update(pw).digest("hex").toUpperCase();

        if (hash === ipw) {
            return true;
        } else {
            return false;
        }
    }
}
