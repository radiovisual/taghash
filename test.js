'use strict';
var assert = require('assert');
var taghash = require('./');

describe("taghash", function(){

    it('should wrap plain-text hashtags with twitter-ready anchor tags', function(){

        assert.equal(taghash("#hashtag"), "<a href=\"https://twitter.com/hashtag/hashtag\">#hashtag</a>");

    });

    it('should convert multiple hashtags in string', function(){

        assert.equal(taghash("Shoutout! #hashtag01 #hashtag02"), "Shoutout! <a href=\"https://twitter.com/hashtag/hashtag01\">#hashtag01</a> <a href=\"https://twitter.com/hashtag/hashtag02\">#hashtag02</a>");

    });

    it('should return unmodified string if string has no hashtags', function(){

        assert.equal(taghash("Shoutout!"), "Shoutout!");

    });

    it('should ignore any hashtag values preceded by `##`', function(){

        assert.equal(taghash("##Shoutout!"), "##Shoutout!");

    });

    it('should still work on valid values, and skip invalid values', function(){

        assert.equal(taghash("##Shoutout! #yo"), "##Shoutout! <a href=\"https://twitter.com/hashtag/yo\">#yo</a>");

    });

    it('should find hastags at the beginning of a string', function(){

        assert.equal(taghash("#yo! howdy peeps"), "<a href=\"https://twitter.com/hashtag/yo\">#yo</a>! howdy peeps");

    });

    it('should find hastags at the end of a string', function(){

        assert.equal(taghash("howdy peeps #yo!"), "howdy peeps <a href=\"https://twitter.com/hashtag/yo\">#yo</a>!");

    });

    it('should allow a custom src passed in', function(){
        assert.equal(taghash("howdy peeps #yo!", {href: "http://example.com/"}), "howdy peeps <a href=\"http://example.com/yo\">#yo</a>!")
    });










});