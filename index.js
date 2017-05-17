/**
 * Hanlp Client
 */
const debug = require('debug')('hanlp-client');
const superagent = require('superagent');
const HANLP_SERVER_URL = process.env['HANLP_SERVER_URL'] || 'http://nlp.chatbot.io';
const compromise = require('./lib/compromise');
const _ = require('lodash');
const REQ_RC_SUCCESS = 'success';

function HanlpClient() {

}

/**
 * cut Chinese Sentence 中文分词
 * @param {*} sentence 
 */
HanlpClient.prototype.cutSentence = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/tokenizer`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign({
            type: 'nlp'
        }, data));
    return result.body
}

/**
 * Get key words 提取关键词
 * @param {*} data 
 */
HanlpClient.prototype.getKeywords = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/keyword`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign({
            num: 2
        }, data));
    return result.body
}

/**
 * match entities
 */
function _matchEntities(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchEntities(result.data)
    } else {
        throw new Error('Match entities: can not get response successfully.')
    }
}

/**
 * Get entities 人名，地名，组织机构名称
 */
HanlpClient.prototype.matchEntities = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match entities \n', result);
    return _matchEntities(result)
}

/**
 * 匹配人名
 */
function _matchNames(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return _.uniq(compromise.matchNames(result.data))
    } else {
        throw new Error('Match entities: can not get response successfully.')
    }
}

HanlpClient.prototype.matchNames = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match names \n', result)
    return _matchNames(result);
}

function _matchNoun(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchNoun(result.data)
    } else {
        throw new Error('Match nouns: can not get response successfully.')
    }
}

/**
 * Get nouns 名词
 */
HanlpClient.prototype.matchNoun = async function (data) {
    let result = await this.cutSentence(data);
    debug('matchNoun \n', result);
    return _matchNoun(result)
}


function _matchAdverbs(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchAdverbs(result.data)
    } else {
        throw new Error('matchAdverbs: can not get response successfully.')
    }
}

/**
 * Get adverbs 副词
 */
HanlpClient.prototype.matchAdverbs = async function (data) {
    let result = await this.cutSentence(data);
    debug('matchAdverbs \n', result);
    return _matchAdverbs(result)
}

function _matchVerbs(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchVerbs(result.data)
    } else {
        throw new Error('Match entities: can not get response successfully.')
    }
}

/**
 * Get verbs 动词
 */
HanlpClient.prototype.matchVerbs = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match entities \n', result);
    return _matchVerbs(result)
}

function _matchAdjectives(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchAdjectives(result.data)
    } else {
        throw new Error('Match adjectives: can not get response successfully.')
    }
}

/**
 * Get adjectives 形容词
 */
HanlpClient.prototype.matchAdjectives = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match entities \n', result);
    return _matchAdjectives(result)
}

function _matchPronouns(result) {
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchPronouns(result.data)
    } else {
        throw new Error('matchPronouns: can not get response successfully.')
    }
}


/**
 * Get pronouns 指示代词
 */
HanlpClient.prototype.matchPronouns = async function (data) {
    let result = await this.cutSentence(data);
    debug('matchPronouns \n', result);
    return _matchPronouns(result)
}

/**
 * Get summary 摘要
 */
HanlpClient.prototype.getSummary = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/summary`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign({
            num: 2
        }, data));
    return result.body
}

/**
 * Get summary and keywords 摘要和关键词
 */
HanlpClient.prototype.getSummaryAndKeywords = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/query`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign({
            num: 2
        }, data));
    return result.body
}

/**
 * get phrase 短语提取 
 */
HanlpClient.prototype.getPhrase = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/phrase`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign({
            num: 2
        }, data));
    return result.body
}

/**
 * 繁体转简体
 */
HanlpClient.prototype.convertJT = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/conversion`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign(data, {
            type: 'jt'
        }));
    return result.body
}

/**
 * 简体转繁体
 */
HanlpClient.prototype.convertFT = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/conversion`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign(data, {
            type: 'ft'
        }));
    return result.body
}

/**
 * 转拼音
 */
HanlpClient.prototype.convertPY = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/conversion`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(_.assign(data, {
            type: 'py'
        }));
    return result.body
}

/**
 * Combine NLP 
 */
HanlpClient.prototype.combine = async function (data) {
    try {
        let cut = await this.cutSentence(data);
        let keywords = await this.getKeywords(data);
        return {
            status: 'success',
            data: {
                keywords: keywords.data,
                nouns: _matchNoun(cut),
                entities: _matchEntities(cut),
                adverbs: _matchAdverbs(cut),
                verbs: _matchVerbs(cut),
                adjectives: _matchAdjectives(cut),
                pronouns: _matchPronouns(cut),
                names: _matchNames(cut)
            }
        }
    } catch (e) {
        return {
            status: 'error',
            error: e
        }
    }
}

exports = module.exports = new HanlpClient();
