'use strict';

module.exports = function (str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('taghash expects a string');
    }

    options = options || {};
    options.href = options.href || 'https://twitter.com/hashtag/';

    if (!(/#/g).test(str)) {
        return str;
    }

    var hashes = str.match(/[^|\s]?#[\d\w]+/g);

    if (!hashes) {
        return str;
    }

    var s = str;

    hashes.forEach(function (item) {
        var hash = item.slice(1);

        // ignore tags that have a double "##"
        if (hash.substring(0, 1) !== '#') {
            s = s.replace(item, '<a href="' + options.href + '' + hash + '">' + item + '</a>');
        }
    });

    return s;
};
