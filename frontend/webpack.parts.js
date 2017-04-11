exports.loadImages = function ({ include, exclude, options } = {}) {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|svg)$/,
          include,
          exclude,

          use: {
            loader: 'url-loader',
            options
          }
        }
      ]
    }
  }
}
