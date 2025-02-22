const {addition,multiply} = require('./libs/mathfn')
const numbers = [1, 2, 3, 4, 5];

addition(numbers, function(error,result) {
    if (error) {
        console.log(error)
    }
    else
      console.log("Addtion Result: " + result)
})

multiply(numbers, function(error,result) {
    if (error) {
        console.log(error)
    }
    else
      console.log("Multiplication Result: " + result)
})