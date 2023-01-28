describe('Understanding Version Control Systems', function() {
    var locators = require('./locators.js');
    var using = require('jasmine-data-provider');
    var d = require('./data.js');
    beforeEach(function(){
        locators.getURL();
    })
    using(d, function(data){
        it('Simple Calculator Test ' + data.description, function(){
            locators.firstInput.sendKeys(data.firstInput);
            locators.secondInput.sendKeys(data.secondInput);
            locators.goButton.click();
            expect(locators.result.getText()).toBe(data.result);
            locators.result.getText().then(function(text){
                console.log(text);
            })
        })
    })
})