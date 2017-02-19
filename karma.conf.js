var webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        frameworks: ["mocha"],
        files: [
            "app/tests/**/*.test.jsx",
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/foundation-sites/dist/js/foundation.min.js'
        ],
        preprocessors: {
            "app/tests/**/*.test.jsx": ["webpack", "sourcemap"]
        },
        browserNoActivityTimeout: 60000, //default 10000
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 1, // default 0
        captureTimeout: 60000,
        reporters: ["mocha"],
        client: {
            mocha: {
                timeout: "10000"
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
