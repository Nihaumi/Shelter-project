# Shelter

## Install ddev

* [DDEV-Installation](https://ddev.readthedocs.io/en/latest/)

## WORKING ON FRONTEND

### Installation
	$ cd compressor
	$ npm install

### Compile CSS and Js both #lazydev
This task will copy all relevant font files from node_modules and run js-compiling and gulp.

This is the same way the deployment task will do.  

	$ cd compressor
	$ npm run compile:all

### Compile and lint SCSS
The following commands are available in `/compressor`

	# default: Compile all SCSS
	$ gulp
	
	# use the watch command (it calls the 'default' task)
	$ gulp watch

### Compile and lint Javascript
	# Compile all js
	$ npm run compile:js
	
	# Lint all js
	$ npm run lint:js
	
	# Fix all js with standardJs
	$ npm run fix:js
