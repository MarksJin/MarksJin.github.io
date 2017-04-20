/**
 * Created by jinyupan on 2017/4/18.
 */
var yaml = require('js-yaml')
var fs = require('fs')

try {
    var doc = yaml.load(
        fs.readFileSync('./_config.yml', 'utf8')
    )
    console.log(doc)
} catch (e){
    console.log(e)
}