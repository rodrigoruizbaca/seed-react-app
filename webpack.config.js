const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProd = env === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: cssExtract.extract({
                    use: [
                        {
                            loader: "css-loader", 
                            options: {sourceMap: true}
                        },
                        {
                            loader: "sass-loader", 
                            options: {sourceMap: true}
                        }
                    ]
                })  
            }]
        },
        plugins: [cssExtract],
        devtool: isProd ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            port: 3000,
            historyApiFallback: true
        }
    };
};
