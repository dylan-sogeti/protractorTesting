function dataProvider(){
    return[
        calcValuesOne = {
            description : "calcValuesOne",
            firstInput : "8",
            secondInput : "81",
            result : "89"
        },
        calcValuesTwo = {
            description : "calValuesTwo",
            firstInput : "32",
            secondInput : "27",
            result : "59"
        },
        calcValuesThree = {
            description : "calValuesThree",
            firstInput : "50",
            secondInput : "38",
            result : "88"
        }
    ]
}
module.exports = new dataProvider();