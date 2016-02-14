# taghash

> Convert plain-text hashtags into twitter-ready hyperlinks

[![Build Status](https://travis-ci.org/radiovisual/taghash.svg?branch=master)](https://travis-ci.org/radiovisual/taghash)

## Usage

Defaults to twitter-ready hyperlinks:

```js
var taghash = require('taghash');

var markup01 = taghash("Some text with #acoolhash");
//=> Some text with <a href="https://twitter.com/hashtag/acoolhash">#acoolhash</a>

var markup02 = taghash("#many #hastags");
//=> <a href="https://twitter.com/hashtag/many">#many</a> <a href="https://twitter.com/hashtag/hastags">#hastags</a>
```

But you can pass in any href you want:

```js
var markup03 = taghash("pass custom src #hashtag!", {href: "http://example.com/"});
//=> pass custom src <a href="http://example.com/hashtag">#hashtag</a>!
```

## License 

MIT @ [Michael Wuergler](http://numetriclabs.com/)

