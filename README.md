Console-Stubs.js - Avoid `console` errors in browsers that lack a console.
================================================================================
[![Sauce Test Status](https://saucelabs.com/browser-matrix/console-stubs-js.svg)](https://saucelabs.com/u/console-stubs-js)

This is basically just a bower installerable version of what can be found here:
https://github.com/h5bp/html5-boilerplate/blob/master/dist/js/plugins.js

I have written a very basic unit test for this to prove
it works across a wide range of browsers and platforms.

_NOTE: This does not provide any extra functionality. It is NOT a polyfill!_

All this does is ensure no errors are thrown by browsers that do not support
```console.log``` in the event calls to the function are contained in production
code still.

If you are looking for a solution to help with debugging in browsers that do not
support ```console.log```, I would either just install Firebug Lite into your
project or look at something like: http://patik.github.io/console.log-wrapper/

How to Install
--------------------------------------------------------------------------------
Installation via bower is easy:

	bower install --save console-stubs.js

How to Use:
--------------------------------------------------------------------------------
Include it into your HTML page like so:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Example</title>
		<script src="console-stubs.min.js"></script>
	</head>
	<body>
		<p>
			8-bit forage Banksy freegan, ennui master cleanse PBR disrupt
			crucifix Brooklyn vegan. Williamsburg lumbersexual artisan,
			Austin deep v mixtape Blue Bottle before they sold out.
		</p>
	</body>
</html>
```

__I would include it high in the order of scripts
that you have on your page, if not the first script.__

And thats all there is to it :)

Credits:
--------------------------------------------------------------------------------
The original code for this came from the HTML5 Bolier Plate project.
see: https://github.com/h5bp/html5-boilerplate/blob/master/dist/js/plugins.js

--------------------------------------------------------------------------------
Developed by Brad Jones - brad@bjc.id.au
