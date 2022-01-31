const path = require('path')
const mix = require('laravel-mix')
const webpackNodeExternals = require('webpack-node-externals')

mix
    .options({ manifest: false })
    .js('resources/js/ssr.js', 'public/js')
    .vue({ version: 2, options: { optimizeSSR: true } })
    .alias({ 'Vue': 'vue/dist/vue.runtime.common.js' })
    .webpackConfig({
        target: 'node',
        externals: [webpackNodeExternals()],
    })