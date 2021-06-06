const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);

module.exports = {
    entry: {
        'home/index': 'app/web/page/home/index.jsx'
    },
    loaders: {
        babel: {
          include: [ resolve('app/web'), resolve('node_modules') ],
        },
        less: {
          include: [ resolve('app/web'), resolve('node_modules') ],
        },
      },
      resolve: {
        extensions: [ '.json', '.js', '.jsx' ],
        alias: {
          web: resolve('app/web'),
          page: resolve('app/web/page'),
          '@admin': resolve('app/web/page/admin/router'),
        },
    }
};