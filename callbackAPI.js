function initUserDetails(name, callback) {
    console.log(`Hello, ${name}!`);
    // var error = {
    //     "message": "Failed to fetch response. Try after some time",
    //     "statusCode": 400

    // }

    var error = {}
    var respose = {
        "Id": 1,
        "Address": "Bahrain",
        "Phone": 36317294
    }
    callback(error,respose);
}

function fetchUserDetails(error, response) {
    if (error?.message) {
        console.log("Server responded with error")
        console.log(`StatusCode : ${error?.statusCode}`)
        console.log(`Error Message: ${error.message}`)
    }
    else if (response) {
        console.log("Please find your details below:")
        console.log(response)
    }
}

// Calling function with a callback
initUserDetails("Mohamad Aliyul", fetchUserDetails);