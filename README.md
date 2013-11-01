# Wordpress+html5+git+less+grunt+capistrano Site boilerplate

This project contains everything that's needed when starting developing a site 
using the afformentioned tech stack. The goal is to reduce project startup time 
from two hours of tedious copying of what you always do to 30 seconds of Makefile.


## Getting started

* `git clone [this repo] [project name]`
* `cd [project name]`
* __`make install THEME=[theme name]`__
* ???
* Profit


### Installing Wordpress

* Run the wp-installation on project/wordpress/
* Go to settings and change the url (Site Address) to not use /wordpress
* If you actually want to use /wordpress (or /something_else), remove src/index.php


### That's it

Happy coding!


## Miscellaneous notes

* Run `grunt watch` from the [theme name]/grunt folder
* Don't forget to add new js-files to Gruntfile.js
* If you're not using capistrano, just delete the config directory and Capfile.


## TODO

* Cross platform Makefile
