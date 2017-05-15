/**
 * Test
 */
const test = require('ava');
const client = require('../index')
const debug = require('debug')('hanlp-client:debug')

test('Hanlp Client#cutChineseSentence', async (t) => {
    let result = await client.cutChineseSentence({
        "type": "nlp",
        "content": "刘德华和张学友创作了很多流行歌曲"
    })
    debug('cutChineseSentence#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#getKeywordsChineseSentence', async (t) => {
    let result = await client.getKeywordsChineseSentence({
        "num": 2,
        "content": "刘德华和张学友创作了很多流行歌曲"
    })
    debug('getKeywordsChineseSentence#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.length > 0, 'data length should be more then zero.')
    t.pass()
})