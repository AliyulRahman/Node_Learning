var filesystem = require('fs');
// Create new file
var contentJson = {
    Name: "Mohamad",
    Designation: "Full Stack Developer"
} 

// create a Json file
filesystem.appendFile('Aliyul.json', JSON.stringify(contentJson), function (error) {
    if (error) 
            throw error;
    console.log('New Json file saved with below content');
    console.log(contentJson);
  });


  // Write a new value in Json file
const newData = { 
    Name: "Aliyul",  
    Designation: "MERN Stack Developer"
};

filesystem.writeFile('Aliyul.json', JSON.stringify(newData, null, 2), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File has been replaced with new Json Content.');
});

// Read Json file which is already created
filesystem.readFile('Aliyul.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        contentJson = JSON.parse(data); // Convert JSON string to object
        console.log('File has been read successfully with below content');
        console.log(contentJson);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
