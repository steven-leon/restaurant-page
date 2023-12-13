// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };


 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/restaurant-page/' // Aquí cambias el valor
    },
 };
