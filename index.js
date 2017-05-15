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
 * Get entities 人名，地名，组织机构名称
 */
HanlpClient.prototype.matchEntities = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match entities \n', result);
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchEntities(result.data)
    } else {
        throw new Error('Match entities: can not get response successfully.')
    }
}

/**
 * Get nouns 名词
 */
HanlpClient.prototype.matchNoun = async function (data) {
    let result = await this.cutSentence(data);
    debug('matchNoun \n', result);
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchNoun(result.data)
    } else {
        throw new Error('Match nouns: can not get response successfully.')
    }
}

/**
 * Get adverbs 副词
 */
HanlpClient.prototype.matchAdverbs = async function (data) {
    let result = await this.cutSentence(data);
    debug('matchAdverbs \n', result);
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchAdverbs(result.data)
    } else {
        throw new Error('matchAdverbs: can not get response successfully.')
    }
}

/**
 * Get verbs 动词
 */
HanlpClient.prototype.matchVerbs = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match entities \n', result);
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchVerbs(result.data)
    } else {
        throw new Error('Match entities: can not get response successfully.')
    }
}

/**
 * Get adjectives 形容词
 */
HanlpClient.prototype.matchAdjectives = async function (data) {
    let result = await this.cutSentence(data);
    debug('Match entities \n', result);
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchAdjectives(result.data)
    } else {
        throw new Error('Match adjectives: can not get response successfully.')
    }
}

/**
 * Get pronouns 指示代词
 */
HanlpClient.prototype.matchPronouns = async function (data) {
    let result = await this.cutSentence(data);
    debug('matchPronouns \n', result);
    if (result.status == REQ_RC_SUCCESS) {
        return compromise.matchPronouns(result.data)
    } else {
        throw new Error('matchPronouns: can not get response successfully.')
    }
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

exports = module.exports = new HanlpClient();
