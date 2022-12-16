const fs = require('fs');
let pathToOutputDirectory = __dirname + '/../output'
let pathToOutputFile = __dirname + '/../output/output.json'


function _createOutputDirectory(){
    if (!fs.existsSync(pathToOutputDirectory)){
        fs.mkdirSync(pathToOutputDirectory);
        console.log('output Directory Created Successfully.')
    } else {
        console.log('output Directory Already Exists.')
    }
}

function _createJsonOutputFile(){
    if (!fs.existsSync(pathToOutputFile)){
        fs.writeFileSync(pathToOutputFile, JSON.stringify({"output": "data"}))
        console.log('output File Created Successfully.')
    } else {
        console.log('output File Already Exists.')
    }  
}

_createOutputDirectory()
_createJsonOutputFile()
