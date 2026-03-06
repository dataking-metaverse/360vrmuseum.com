const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            "~" : path.resolve(__dirname, 'resources/js'),
        },
    },
});

mix
    .react('resources/js/telescope.jsx', 'public/js')
    .react('resources/js/app.jsx', 'public/js')
    .react('resources/js/app-server.jsx', 'public/js')
    .version()
;
