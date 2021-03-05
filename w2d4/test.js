let assert=require("assert");
let test = require("./l8arrays.js")

describe("",function(){
    it(`["not", "a", "kayak", "eagle", "racecar"] must return [ "a", "kayak", "racecar" ]`,function(){
        assert.strictEqual(test.filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]) , [ 'a', 'kayak', 'racecar' ])
    })
})