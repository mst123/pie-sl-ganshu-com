const path = require('path')
const join = path.join;
const fs = require('fs');
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },
}
const buildConfig = {
  outputDir: 'lib',
  productionSourceMap: false,
  // publicPath: './',
  configureWebpack: {
    entry: { 
      ...getEntries('packages'),
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2'
    }
  },
  css: {
    sourceMap: true,
      extract: {
        filename: 'style/[name].css'
      }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(option => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
        return option
      })
    config.module
      .rule('images')
      .use('url-loader')
        .loader('url-loader')
      .tap(options => {
        console.log(JSON.stringify(options));
        return Object.assign(options, {
          limit: 40960
        })
      })
  }
}
// 自动引入
function getEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item)
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
        ret[item] = resolve(join(itemPath, 'index.js'))
    } else {
        const [name] = item.split('.')
        ret[name] = resolve(`${itemPath}`)
    }
    return ret
  }, {})
  return entries
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;