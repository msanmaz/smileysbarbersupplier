module.exports = {
    trailingSlash: true,
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style?insertAt=top', 'css'],
        },
      ],
    },
  }