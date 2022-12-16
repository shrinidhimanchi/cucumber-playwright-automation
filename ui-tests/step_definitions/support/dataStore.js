const fs = require('fs')
const path = require('path')
const {v4: uuidv4 } = require('uuid')
const envConfiguration = require('./envConfiguration')
const envConfig = new envConfiguration()

class dataStore {
    constructor(attach, log, parameters){
        this.headers = {}
        this.queryParams = {}
        this.attach = attach
        this.log = log
        this.parameters = parameters
        this.testDataDir = __dirname + '/../../requests/testData/testData-'+ this._setTestDataDirectoryPath()
        this.requestBodyPath = require(__dirname + '/../../requests/requestBody.json')
    }

    _setTestDataDirectoryPath(){
        return process.env.NODE_ENV.toString()
    }

    getHeaders(){
        return this.headers
    }

    getQueryParams(){
        return this.queryParams
    }

    getUuidV4(){
        return uuidv4()
    }

    _retrieveDataFromJson(scenarioName){
        let jsonObj = {}
        jsonObj = fs.readdirSync(this.testDataDir, {withFileTypes: false})
                    .filter(name => path.extname(name) === '.json')
                    .map(name => require(path.join(this.testDataDir, name)))
                    
                    for(var j=0; j < Object.keys(jsonObj).length; ++j){
                        for(var i=0; i<Object.keys(jsonObj[j]).length; ++i){
                            if(jsonObj[j][i].scenarioName == scenarioName){
                                //console.log('Contents of Scenario Object is : '+JSON.stringify(jsonObj[j][i]))
                                return [jsonObj[j][i].testData, jsonObj[j][i].headers, jsonObj[j][i].queryParams]
                            }
                        }
                    }
                    throw new error('Scenario Name doesn\'t exists')
    }

    retrieveRequestHeaders(scenarioName){
        if(this._retrieveDataFromJson(scenarioName)[1] != null){
            this.headers = this._retrieveDataFromJson(scenarioName)[1]
            this.attach('Request Headers are : '+ JSON.stringify(this.getHeaders()))
            return this.headers
        } else {
            throw new Error('header node doesn\'t exists')
        }

    }

    retrieveRequestQueryParams(scenarioName){
        if(this._retrieveDataFromJson(scenarioName)[2] != null){
            this.queryParams = this._retrieveDataFromJson(scenarioName)[2]
            this.attach('Request Query Params are : '+ JSON.stringify(this.getQueryParams()))
            return this.queryParams
        } else {
            throw new Error('queryParams node doesn\'t exists')
        }

    }

    removeAllQueryParams(){
        this.queryParams = {}
        this.attach('Request Query Params are : '+ JSON.stringify(this.queryParams))
        return this.queryParams
    }

    returnHeaderValueBasedOnHeaderName(headerName){
        if(this.getHeaders().hasOwnProperty(headerName)){
            return this.getHeaders()[headerName]
        }
    }

    checkHeaderExists(headerName){
        if(this.getHeaders().hasOwnProperty(headerName)){
            return true
        } else {
            return false
        }
    }

    retrieveRequestBasedOnMatchingKey(key){
        if(this.requestBodyPath.hasOwnProperty(key)){
            return this.requestBodyPath[key]
        } else {
            throw new Error("Key Doesn't exist in the JSON")
        }
    }

    retrieveValueFromMatchingKeyBasedOnScenarioName(scenarioName, keyName){
        if(this._retrieveDataFromJson(scenarioName)[0] != null){
            let value = this._retrieveDataFromJson(scenarioName)[0][keyName]
            this.attach('Value retrieved from matching keyName'+ ' `'+ keyName + '` is : '+value)
            return value
        } else {
            throw new Error('testData node doesn\'t exists to fetch the required '+ keyName)
        }

    }

    addQueryParams(queryParamName, queryParamValue){
        this.queryParams[queryParamName] = queryParamValue
    }

    deleteRequestHeaderBasedOnHeaderName(headerName){
        if(JSON.stringify(this.headers).includes(headerName)){
            delete this.headers[headerName]
        }
    }
}

module.exports = dataStore