System.defaultJSExtensions = true;

System.config({
    packages: {
        'dist/app': {
            format: 'cjs',
            defaultExtension: 'js'
        },
    },
    paths: {
        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        'angular2-pollyfills': 'node_modules/angular2/bundles/angular2-polyfills.js',
        'systemjs': 'node_modules/systemjs/dist/system.js',
        'angular2': 'node_modules/angular2/bundles/angular2.dev.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'traceur': 'node_modules/traceur/bin/traceur.js',
    },
    transpiler: 'traceur'
});