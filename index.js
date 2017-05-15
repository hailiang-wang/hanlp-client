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
 * cut Chinese Sentence
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
 * Get key words
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
 * Get entities
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
 * Get nouns
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
 * Get adverbs
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
 * Get verbs
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
 * Get adjectives
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
 * Get pronouns
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
 * Get summary
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

exports = module.exports = new HanlpClient();
