const { element, browser } = require("protractor")

describe("Deep Dive Into Protractor Code API", function() {
    function Calculate(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function(item) {
            item.getAttribute("value").then(function(values) {
                if(values == c) {
                    item.click();
                }
            })
        })
        element(by.id("gobutton")).click();
    }

    it('Work with drop down items', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');
        element.all(by.tagName("option")).each(function(item) {
            item.getAttribute("value").then(function(values) {
                console.log(values);
            })
        })
        Calculate(28,23,"ADDITION");
        Calculate(23,33,"ADDITION");
        Calculate(100,76,"MODULO");
        Calculate(34,5,"DIVISION");
        browser.sleep(15000);
    })
})