// multiple entry points: https://webpack.github.io/docs/multiple-entry-points.html

module.exports.entry = "./src/app.ts";

module.exports.output = {
    path: 'build',
    filename: "app.js",
}
module.exports.resolve = {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
}
