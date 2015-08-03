# taghash

> Convert plain-text hashtags into twitter-ready hyperlinks

## Usage

```js
var taghash = require('taghash');

var markup01 = taghash("Some text a #coolhash");
//=> Some text a <a href="https://twitter.com/hashtag/coolhash">#coolhash</a>

var markup02 = taghash("#many #hastags");
//=> <a href="https://twitter.com/hashtag/many">#many</a> <a href="https://twitter.com/hashtag/hastags">#hastags</a>

```

## License 

MIT @ [Michael Wuergler](http://numetriclabs.com/)

