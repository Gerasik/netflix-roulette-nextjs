// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
//       use: [
//         {
//           loader: 'url-loader',
//           options: {
//             limit: 8192,
//             name: 'static/media/[name].[hash:8].[ext]',
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  webpack(config, options) {
    // config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.modules = [path.resolve('src'), path.resolve(__dirname, 'src'), 'node_modules'];

    return config;
  },
});

// test: /\.scss$/,
//   use: [
//     'vue-style-loader',
//     'css-loader',
//     {
//       loader: 'sass-loader',
//       options: {
//         // вы можете также указать файл, например `variables.scss`
//         // используйте свойство `data` здесь, если версия sass-loader < 8
//         prependData: `$color: red;`
//       }
//     }
//   ]
