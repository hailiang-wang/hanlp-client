/**
 * Test
 * http://nlp.chatbot.io/public/index.html
 */
const test = require('ava');
const client = require('../index')
const debug = require('debug')('hanlp-client:debug')

test('Hanlp Client#cutSentence', async (t) => {
    let result = await client.cutSentence({
        "type": "nlp", // 其他支持type类型，查看 http://nlp.chatbot.io/public/index.html
        "content": "刘德华和张学友创作了很多流行歌曲"
    })
    debug('cutSentence#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#getKeywords', async (t) => {
    let result = await client.getKeywords({
        "num": 2,
        "content": "刘德华和张学友创作了很多流行歌曲"
    })
    debug('getKeywords#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.length > 0, 'data length should be more then zero.')
    t.pass()
})

test('Hanlp Client#matchEntities', async (t) => {
    let result = await client.matchEntities({
        "type": "nlp",
        "content": "刘德华和张学友创作了很多流行歌曲"
    })
    debug('matchEntities#result \n', result)
    t.truthy(result.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#matchNoun', async (t) => {
    let result = await client.matchNoun({
        "type": "nlp",
        "content": "刘德华和张学友创作了很多流行歌曲"
    })
    debug('matchNoun#result \n', result)
    t.truthy(result.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#matchAdverbs', async (t) => {
    let result = await client.matchAdverbs({
        "type": "nlp",
        "content": "大家纵情的歌唱美好生活。"
    })
    debug('matchAdverbs#result \n', result)
    t.truthy(result.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#matchVerbs', async (t) => {
    let result = await client.matchVerbs({
        "type": "nlp",
        "content": "大家纵情的歌唱美好生活。"
    })
    debug('matchVerbs#result \n', result)
    t.truthy(result.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#matchAdjectives', async (t) => {
    let result = await client.matchAdjectives({
        "type": "nlp",
        "content": "美好的一天开始了。"
    })
    debug('matchAdjectives#result \n', result)
    t.truthy(result.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#matchPronouns', async (t) => {
    let result = await client.matchPronouns({
        "type": "nlp",
        "content": "雷锋是一个好同志，他做了很多帮助大家的事。"
    })
    debug('matchPronouns#result \n', result)
    t.truthy(result.length > 0, 'result should be success.')
    t.pass()
})

test('Hanlp Client#getSummary', async (t) => {
    let result = await client.getSummary({
        "content": "华尔街向来都是资本主义至上。但理查德·克雷布认为，华尔街还可以是一个友好合作的地方。他在旧金山创立的对冲基金Numerai依靠人工智能算法来处理所有的交易。但这位现年29岁的南非数学家并不是依靠一己之力开发出这些算法的。相反，他的基金从成千上万名匿名数据科学家那里众包这些算法，那些科学家通过打造最成功的交易模型来争夺比特币奖励。而那还不是最奇怪的部分。"
    })
    debug('getSummary#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.length > 0, 'result data length should be more then zero.')
    t.pass()
})

test('Hanlp Client#getSummaryAndKeywords', async (t) => {
    let result = await client.getSummaryAndKeywords({
        "content": "华尔街向来都是资本主义至上。但理查德·克雷布认为，华尔街还可以是一个友好合作的地方。他在旧金山创立的对冲基金Numerai依靠人工智能算法来处理所有的交易。但这位现年29岁的南非数学家并不是依靠一己之力开发出这些算法的。相反，他的基金从成千上万名匿名数据科学家那里众包这些算法，那些科学家通过打造最成功的交易模型来争夺比特币奖励。而那还不是最奇怪的部分。"
    })
    debug('getSummaryAndKeywords#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.keyword.length > 0, 'result data length should be more then zero.')
    t.truthy(result.data.summary.length > 0, 'result data length should be more then zero.')
    t.pass()
})


test('Hanlp Client#getPhrase', async (t) => {
    let result = await client.getPhrase({
        "content": "华尔街向来都是资本主义至上。但理查德·克雷布认为，华尔街还可以是一个友好合作的地方。他在旧金山创立的对冲基金Numerai依靠人工智能算法来处理所有的交易。但这位现年29岁的南非数学家并不是依靠一己之力开发出这些算法的。相反，他的基金从成千上万名匿名数据科学家那里众包这些算法，那些科学家通过打造最成功的交易模型来争夺比特币奖励。而那还不是最奇怪的部分。"
    })
    debug('getPhrase#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data.length > 0, 'result data length should be more then zero.')
    t.pass()
})

test('Hanlp Client#convertJT', async (t) => {
    let result = await client.convertJT({
        "content": "我們的機器人由詩人和音樂家驅動"
    })
    debug('convertJT#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data, 'result data length should be more then zero.')
    t.pass()
})

test('Hanlp Client#convertJT', async (t) => {
    let result = await client.convertJT({
        "content": "我們的機器人由詩人和音樂家驅動"
    })
    debug('convertJT#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data, 'result data length should be more then zero.')
    t.pass()
})

test('Hanlp Client#convertFT', async (t) => {
    let result = await client.convertFT({
        "content": "我们的机器人由诗人和音乐家驱动。"
    })
    debug('convertFT#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data, 'result data length should be more then zero.')
    t.pass()
})

test('Hanlp Client#convertPY', async (t) => {
    let result = await client.convertPY({
        "content": "我們的機器人由詩人和音樂家驅動"
    })
    debug('convertPY#result \n', result)
    t.is(result.status, 'success', 'result should be success.')
    t.truthy(result.data, 'result data length should be more then zero.')
    t.pass()
})