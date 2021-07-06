const path = require('path');

module.exports = {
  //webpack will start from this file when running the build process
  entry: './src/index.js',
  //name of the file that we want to build
  output: {
    filename: 'bundle.js',
    //don't use a relative path, only an absolute path
    // path: './dist',
    //the resolve method takes in the directory and the file name
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
  },
  //this is important
  mode: 'none',
  module: {
    //rules array contains multi objects of rules
    rules: [
      {
        //regular expression for a file type that contains .png or .jpg
        test: /\.(png|jpg)$/,
        //can accept one of the four asset module types
        type: 'asset',
        parser: {
          //where webpack decides between inline/resource when using asset
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kb
          },
        },
      },
      //asset source - read the content and return a javascript string of the contents
      {
        test: /\.txt/,
        type: 'asset/source',
      },
    ],
  },
};
