# Pagify.js

A jQuery plugin for effortlessly creating single page web sites.

## Usage

Load Pagify and jQuery:

``` html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="pagify.js" type="text/javascript"></script>
```

Attach a div that will hold the content of each page by listing pages and options:

``` js
$('#page_holder').pagify({
    pages: ['home', 'about', 'contact'],
    default: 'home' // The name of a page or null for an empty div
});
```

Show other pages by linking to hashes:

``` html
<a href='#contact'>Contact</a>
```

_Note:_ Page content should be found in _pagename_.html and pagify will respond to #_pagename_

## Options

`pages` - an array of page names

`default` - the page that is loaded by default or 'null' for an empty div

`animation` - the jQuery animation that is used to show pages, i.e. `fadeIn`, `show`, `slideUp`, `slideDown`. __`show` is used by default.__

`cache` - true or false. Determines if all pages are loaded upfront or not. __false by default.__

## Etc...

**Created by [@ChrisPolis](http://twitter.com/ChrisPolis)**

[MIT License](http://www.opensource.org/licenses/mit-license.php)

