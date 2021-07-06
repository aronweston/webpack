- mode allows for options set up

npx webpack
npx webpack --stats

webpack config

Have to use commonjs inside config files can't use ecmascript modules in webpack 5

- Assets Modules

* allows you to use asset files in your application without making changes to the application, need to add specific config to the application first
* various types:

1. assets/resource - webpack will copy the required file into the output directory
2. assets/inline - inlines the file as a data URI; the file can be used when importing small files like svgs
3. asset - general; webpack will chose between the above, if less than 8kb, auto asset/inline
4. asset/source - injects the asset into the bundle as a string of text

Images with webpack

publicPath:

- in v5 this is taken care of, a configuration in output that appends the path of the root directory to all assets that are compiled directly. In v4, it used to be and empty string which didn't append the root, but now it's configured to auto.
- when you are serving your content from a CDN, express application or somewhere where the sourcing isn't within the repo
- the string within the publicPath is appended to all of the assets: ie. https://unsplash.com/ + ./pineapple

asset/inline
-a base64 representation; doesn't export into the output directory but bakes into a base64 and serves inline via JS. Smaller assets like SVGs are good for this, but not for larger as it makes the js larger.
