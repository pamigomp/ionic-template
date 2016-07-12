'use strict';

module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'www/bower_components/ionic/release/js/ionic.bundle.js',
            'www/bower_components/angular-mocks/angular-mocks.js',
            'www/core/**/*.js',
            'www/common/**/*.js',
            'www/assets/**/*.js',
            'tests/unit/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            'www/!(bower_components)/**/!(*Spec).js': ['coverage']
        },
        reporters: ['dots', 'junit', 'coverage'],
        autoWatch: true,
        colors: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],
        singleRun: false,
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },
        junitReporter: {
            outputDir: 'unit-test-results',
            outputFile: 'testoutput.xml',
            useBrowserName: true,
            suite: 'unit'
        }
    });
};
