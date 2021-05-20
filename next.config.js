module.exports = {
    trailingSlash: true,
   images: {
    domains: ['firebasestorage.googleapis.com'],
  },
    module: {

      loaders: [
        {
          test: /\.css$/,
          loaders: ['style?insertAt=top', 'css'],
        },
      ],
    },
  }


  