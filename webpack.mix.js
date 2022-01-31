const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/client.js', 'public/js').vue()

mix.alias({
    '~': path.resolve(__dirname, 'resources'),
    '@': path.resolve(__dirname, 'resources/js'),
})


/**
 * VuetifyLoaderPlugin
 * Atenção: Esse plugin permite o vuetify realizar corretamente o "tree-shaking"
 * diminuindo o código e melhorando o "code-splitting"
 * @type {VuetifyLoaderPlugin}
 */
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
/**
 * CaseSensitivePathsPlugin
 * Atenção: Esse plugin corrige erros de caminhos no hd entre soluções
 * desenvolvidas em macOS e outros sistemas operacionais.
 * @type {CaseSensitivePathsPlugin}
 */
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


mix.webpackConfig({
    plugins: [
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin()
    ]
});