const config = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["to-string-loader", "css-loader"], // use to-string-loader for 3rd party css
          include: /src/,
        },
        // ...
      ],
    },
    // ...
  }