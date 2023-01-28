const { browser, element } = require("protractor")

describe('Handling Mouseactions, Windows, Alerts with Protractor', function() {
    it('Handling Alerts', function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://rahulshettyacademy.com/AutomationPractice/');
        element(by.id('alertbtn')).click();
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(5000);
        });
        element(by.id('alertbtn')).click();
        browser.switchTo().alert().dismiss().then(function() {
            browser.sleep(5000);
        })
    })
})