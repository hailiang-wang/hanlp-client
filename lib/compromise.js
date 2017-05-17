/**
 * Compromise API for hanlp
 */

var debug = require('debug')('hanlpc')
var _ = require('lodash')

var HanLPCompromise = function () {

}

/**
 * filter data
 * @param {*} data 
 * @param {*} tags 
 */
function filterData(data, tags) {
    return _.filter(data, function (val) {
        return _.some(tags, function (o) {
            return val.nature.startsWith(o)
        })
    })
}

/**
 * Map data after filter
 * @param {*} data 
 * @param {*} tags 
 */
function filterAndMapData(data, tags) {
    let result = filterData(data, tags)
    return _.map(result, function (o) {
        return o.word;
    })
}

/**
 * match Nouns
 */
HanLPCompromise.prototype.matchNoun = function (data) {
    return filterAndMapData(data, ['n'])
}

HanLPCompromise.prototype.matchVerbs = function (data) {
    return filterAndMapData(data, ['v'])
}

HanLPCompromise.prototype.matchAdverbs = function (data) {
    return filterAndMapData(data, ['d'])
}

HanLPCompromise.prototype.matchAdjectives = function (data) {
    return filterAndMapData(data, ['a'])
}

HanLPCompromise.prototype.matchPronouns = function (data) {
    return filterAndMapData(data, ['r'])
}

HanLPCompromise.prototype.matchEntities = function (data) {
    return filterAndMapData(data, ['nr', 'ns', 'nt'])
}

HanLPCompromise.prototype.matchNames = function (data) {
    return filterAndMapData(data, ['nr'])
}


exports = module.exports = new HanLPCompromise();