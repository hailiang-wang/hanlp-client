/**
 * Test script
 */

const test = require('ava');
const debug = require('debug')('hanlpc:debug')
const hanlpc = require('../lib/compromise')

let data1 = [
    {
        "word": "我",
        "nature": "rr",
        "offset": 0
    },
    {
        "word": "是",
        "nature": "vshi",
        "offset": 0
    },
    {
        "word": "中国人",
        "nature": "n",
        "offset": 0
    }
];

let data2 = [
    {
        "word": "热烈",
        "nature": "a",
        "offset": 0
    },
    {
        "word": "地",
        "nature": "ude2",
        "offset": 0
    },
    {
        "word": "鼓掌",
        "nature": "vi",
        "offset": 0
    }
];

let data3 = [
    {
        "word": "他",
        "nature": "rr",
        "offset": 0
    },
    {
        "word": "今天",
        "nature": "t",
        "offset": 0
    },
    {
        "word": "很",
        "nature": "d",
        "offset": 0
    },
    {
        "word": "兴奋",
        "nature": "a",
        "offset": 0
    }
];

let data4 = [
    {
        "word": "清华大学",
        "nature": "ntu",
        "offset": 0
    },
    {
        "word": "是",
        "nature": "vshi",
        "offset": 0
    },
    {
        "word": "中国",
        "nature": "ns",
        "offset": 0
    },
    {
        "word": "首屈一指",
        "nature": "bl",
        "offset": 0
    },
    {
        "word": "的",
        "nature": "ude1",
        "offset": 0
    },
    {
        "word": "学府",
        "nature": "n",
        "offset": 0
    }
];

test('Test #matchNoun', function (t) {
    let result = hanlpc.matchNoun(data1)
    debug(result)
    t.pass()
})

test('Test #matchAdverbs', function (t) {
    let result = hanlpc.matchAdverbs(data2)
    debug(result)
    t.pass()
})

test('Test #matchVerbs', function (t) {
    let result = hanlpc.matchVerbs(data1)
    debug(result)
    t.pass()
})

test('Test #matchAdjectives', function (t) {
    let result = hanlpc.matchAdjectives(data2)
    debug(result)
    t.pass()
})

test('Test #matchPronouns', function (t) {
    let result = hanlpc.matchPronouns(data3)
    debug(result)
    t.pass()
})


test('Test #matchEntities', function (t) {
    let result = hanlpc.matchEntities(data4)
    debug(result)
    t.pass()
})