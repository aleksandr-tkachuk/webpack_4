let path = require("path");

let conf = {
    entry: './src/index', //от куда брать начальный скрипт
    output: {
        path: path.resolve(__dirname, './dist'), //куда класть скрипт
        filename: "main.js",
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true //ошибки не в консоле,а в браузере
    }
};

module.exports = conf;