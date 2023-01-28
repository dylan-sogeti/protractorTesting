exports.config = {
    specs: ['elementsTest.js'],
    suites: {
        Smoke : ['alerts.js', 'dropDown.js'],
        Regression : 'extraLocatorsTest.js'
    }
}