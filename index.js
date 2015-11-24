'use strict';

module.exports = function(str, options){

    var href = "https://twitter.com/hashtag/";

    if (options && options.href){
        href = options.href;
    }

    var regex = /#/gmi;

    if( !(/#/).test(str) ){
        return str;
    }

    var hashes = str.match(/[^|\s]?#[\d\w]+/g);

    var s = str;

    hashes.forEach(function(item, index, array){
        var hash = item.slice(1);

        // ignore tags that have a double "##"
        if(hash.substring(0,1) !== "#"){
            s = s.replace(item, '<a href="'+href+''+hash+'">'+item+'</a>');
        }

    });

    return s;

};