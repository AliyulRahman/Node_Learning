var filesystem = require("fs");

exports.readFile = (fileName, callback) => {
  if (!fileName) callback("Please provide file name", null);
  else {
    filesystem.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
        if (fileName.includes(".json")) {
          var contentJson = JSON.stringify(data); // Convert JSON string
          callback(null,contentJson)
        } else if (fileName.includes(".txt")) {
            var content = data.toString()
            callback(null,content)
        }
        else {
            callback("File format not implemented yet",null)
        }
      
    });
  }
};
