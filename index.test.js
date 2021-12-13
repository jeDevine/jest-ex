// const answers = require("./answer.js")
// const convertTemp = require("./convertTemp.js")
const whatToWear = require("./whatToWear.js")

//calling for tests
describe("answers", function() {
    //tests you want to run

    //testing to see if "life" was input that result returned 42
    // test("expect answer of 42", function() {
    //     expect(answers("life")).toEqual(42);
    // });

    // //testing to see if "boredom" was input that result returned "boredom"
    // test("expecting something else", function() {
    //     expect(answers("boredom")).toEqual("code")
    // });

    // test("stress to return rest", function() {
    //     expect(answers("stress")).toEqual("rest")
    // });
    // //Temp control exersize test
    // test("converst from F to C", function() {
    //     expect(convertTemp(32, "F")).toEqual(0)
    // });
    // test("converst from 20F to 68C", function() {
    //     expect(convertTemp(68, "F")).toEqual(20)
    // });
    // test("converst from F to C", function() {
    //     expect(convertTemp(100, "C")).toEqual(212)
    // });

    test("casual and cold", function() {
        expect(whatToWear("casual", 50)).toEqual("something comfy and a coat");
    });
    test("semi-formal and chilly", function() {
        expect(whatToWear("semi-formal", 60)).toEqual("a polo and a jacket");
    })
    test("formal and warm", function(){
        expect(whatToWear("formal", 75)).toEqual("a suit and no jacket")
    })
})