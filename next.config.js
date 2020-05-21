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
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
