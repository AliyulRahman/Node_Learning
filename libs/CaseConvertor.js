exports.convertCase = (inputText, type, callback) => {
  if (!inputText) {
    callback("Please provide your input text", null);
  } else if (typeof inputText !== "string") {
    callback("Input must be a string", null);
  } else if (!type && (type != 'uc' && type != 'lc')) {
    callback("Invalid input type. It should be either uc or lc", null);
  }

  if (type == "lc") {
    callback(null, inputText.toLowerCase());
  } else if (type == "uc") {
    callback(null, inputText.toUpperCase());
  }
};
