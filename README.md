# Pagify.js

A jQuery plugin for effortlessly creating single page web sites.

## Usage

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
    default: 'home' // The name of a page or null for an empty div
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

`pages` - an array of page names

`default` - the page that is loaded by default or `null` for an empty div. `null` by default.

`animation` - the jQuery animation that is used to show pages, i.e. `fadeIn`, `show`, `slideUp`, `slideDown`. __`show` is used by default.__

`cache` - true or false. Determines if all pages are loaded upfront or not. __false by default.__

## Etc...

**Created by [@ChrisPolis](http://twitter.com/ChrisPolis)**

[MIT License](http://www.opensource.org/licenses/mit-license.php)

