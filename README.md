# Pagify.js

A jQuery plugin for effortlessly creating single page web sites. [Demo](http://cmpolis.github.com/Pagify)

### Features

- __Simple__ - include pagify.js, create a div, make one jQuery call and you're done!
- __Lightweight__ - pagify.js is far less than 100 lines of code, well commented and easy to understand and extend!
- __Flexible__ - Get started by only specifying a list of pages or customize animations, default pages and caching!
- __Fast__ - Load all pages upfront or load on the fly; a simple $.get() is used to get content with minimal proccessing!
- __Clean__ - Replace long HTML files broken up into sections and verbose JS to do the simple task of switching content!
- __Couldn't find an adjective...__ - Uses only Javascript and HTML so it can be uploaded like any other static site!

## Usage

_Checkout the simple demo to see how it works, or..._

### Create a _container_ page:

Load Pagify and jQuery:

``` html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="pagify.js" type="text/javascript"></script>
```

Create a div that will contain page content:

``` html
<div id='page_holder' />
```

Call __pagify__ on the aforementioned div and pass in options. _The only required option is `pages`._

``` js
$('#page_holder').pagify({
    pages: ['home', 'about', 'contact'],
    'default': 'home' // The name of a page or null for an empty div
});
```

Link to other pages by linking to hashes of their page names:

``` html
<a href='#contact'>Contact</a>
<a href='#about'>About</a>
...
```
### Write other pages

Create content pages in the same directory as the container as `[page_name].html`

_i.e. about.html_

``` html
<h1>About us</h1>
<p>This is an about page!</p>
```

## Options

`pages` - an array of page names. _Required._

`default` - the page that is loaded by default or `null` for an empty div. _`null` by default._

`animation` - the jQuery animation that is used to show pages, i.e. `fadeIn`, `show`, `slideUp`, `slideDown`. _`show` by default._

`cache` - true or false. Determines if all pages are loaded upfront or not. _false by default._

`onChange` - a function that takes the page name as a parameter and is executed when the page changes. _empty function by default._

## Etc...

**Created by [@ChrisPolis](http://twitter.com/ChrisPolis)**

[MIT License](http://www.opensource.org/licenses/mit-license.php)

