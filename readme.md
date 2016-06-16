# taghash

> Convert plain-text hashtags into twitter-ready hyperlinks.

[![Build Status](https://travis-ci.org/radiovisual/taghash.svg?branch=master)](https://travis-ci.org/radiovisual/taghash)

## Usage

```js
var taghash = require('taghash');

var markup01 = taghash("Some text with #acoolhash");
//=> 'Some text with <a href="https://twitter.com/hashtag/acoolhash">#acoolhash</a>'

var markup02 = taghash("#many #hastags");
//=> '<a href="https://twitter.com/hashtag/many">#many</a> <a href="https://twitter.com/hashtag/hastags">#hastags</a>'
```

## API

### taghash(string, [options])

Returns a `string` with hashtags converted to hyperlinks.

#### string

*Required*  
Type: `string`<br>

The string with hashtags you want to convert.

#### options

##### href

Type: `string`  
Default: `https://twitter.com/hashtag/`

The href value you want to use when surrounding your hashtags with a url. The default is Twitter's hashtag url.

```js
taghash("pass custom src #hashtag!", {href: "http://example.com/"});
//=> 'pass custom src <a href="http://example.com/hashtag">#hashtag</a>!'
```


## License 

MIT @ [Michael Wuergler](http://numetriclabs.com/)

