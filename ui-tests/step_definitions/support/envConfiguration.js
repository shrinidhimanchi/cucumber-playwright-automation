process.env['NODE_CONFIG_DIR'] = __dirname + '/../../config/development' + require('path').delimiter +
                                 __dirname + '/../../config/production' + require('path').delimiter +
                                 __dirname + '/../../config/testing'

const config = require('config')

class envConfiguration {
    constructor(){
        this.uiHost = this._getConfigValue('uiHost')
    }

    _getConfigValue(key){
        if(config.has(key)){
            return config.get(key)
        } else {
            console.warn('Environment config `'+ key + '` '+ 'doesn\'t exist')
        }
    }

    getUiHost(){
        return this.uiHost
    }
}

module.exports = envConfiguration