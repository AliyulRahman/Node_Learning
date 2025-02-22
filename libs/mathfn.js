exports.addition = (inputs,callback) => {

    if (!inputs)
        callback("Invalid inputs. Please verify your inputs",null)
    else {
        var sum = inputs.reduce((acc, num) => acc + num, 0);
        callback(null,sum)
    }
}

exports.multiply = (inputs,callback) => {

    if (!inputs)
        callback("Invalid inputs. Please verify your inputs",null)
    else {
        var sum = inputs.reduce((acc, num) => acc * num, 1);
        callback(null,sum)
    }
}

