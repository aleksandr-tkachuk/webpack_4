let path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index', //от куда брать начальный скрипт
    output: {
        path: path.resolve(__dirname, './dist'), //куда класть скрипт
        filename: "main.js",
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true //ошибки не в консоле,а в браузере
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                //exclude: '/node_modules' //если есть,заново через babel-loader не прогонять
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: "css-loader"
                })
                /*use: [
                    'style-loader',
                    'css-loader'
                ]*/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
    //devtool: "eval-source-map" //карта сайта, в отладке показует правельные номера полей
};

module.exports = (env, options) => { //настройка webpack для режимов production и development
    let production = options.mode === 'production';

    conf.devtool = production
                                ? false
                                : 'eval-source-map'; //замыканмк
    //console.log(options);
    return conf;
};
