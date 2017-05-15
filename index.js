/**
 * Hanlp Client
 */
const debug = require('debug')('hanlp-client');
const superagent = require('superagent');
const HANLP_SERVER_URL = process.env['HANLP_SERVER_URL'] || 'http://nlp.chatbot.io';

function HanlpClient() {

}

/**
 * cut Chinese Sentence
 * @param {*} sentence 
 */
HanlpClient.prototype.cutChineseSentence = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/tokenizer`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(data);
    return result.body
}

/**
 * Get key words
 * @param {*} data 
 */
HanlpClient.prototype.getKeywordsChineseSentence = async function (data) {
    let result = await superagent.post(`${HANLP_SERVER_URL}/keyword`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(data);
    return result.body
}


exports = module.exports = new HanlpClient();
