describe('Page Object Mechanism Demo', function() {
    let locators = require('./locators.js');
    beforeEach(function() {
        locators.getURL();
    });
    it('Work with variable locators', function() {
        locators.firstInput.sendKeys("41");
        locators.secondInput.sendKeys("67");
        locators.goButton.click();
        expect(locators.result.getText()).toBe("108");
        locators.result.getText().then(function(text) {
            console.log(text)
        })
    })
    afterEach(function() {
        console.log("Test has been completed")
    })
})