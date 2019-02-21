var webpack = require("webpack"),
    config = require("../webpack.config");

delete config.projectOptions;

webpack(
  config,
  function (err) { if (err) throw err; }
);
