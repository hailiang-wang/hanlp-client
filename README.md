# hanlp client
[自然语言处理API服务](http://nlp.chatbot.io/public/index.html)

## Welcome
![](https://camo.githubusercontent.com/ae91a5698ad80d3fe8e0eb5a4c6ee7170e088a7d/687474703a2f2f37786b6571692e636f6d312e7a302e676c622e636c6f7564646e2e636f6d2f61692f53637265656e25323053686f74253230323031372d30342d30342532306174253230382e32302e3437253230504d2e706e67)

## Configure
By default, **hanlp-client** connected with [nlp.chabot.io](http://nlp.chatbot.io/public/index.html).

Just set **HANLP\_SERVER\_URL** as an environment variable for customized URL.

e.g.

```
export HANLP_SERVER_URL=http://localhost:3002
```

## Usage
```
npm install hanlp-client
var client = require('hanlp-client')
```

### 中文分词
client.cutSentence(data)

### 提取关键词
client.getKeywords(data)

### 实体命名标识：人名，地名，组织机构名称
client.matchEntities(data)

### 名词
client.matchNoun(data)

### 副词
client.matchAdverbs(data)

### 动词
client.matchVerbs(data)

### 形容词
client.matchAdjectives(data)

### 指示代词
client.matchPronouns(data)

### 摘要
client.getSummary(data)

### 摘要和关键词
client.getSummaryAndKeywords(data)

### 短语提取
client.getPhrase(data)

### 繁体转简体
client.convertJT(data)

### 简体转繁体
client.convertFT(data)

### 转拼音
client.convertPY(data)

## [API详细介绍](https://github.com/Samurais/hanlp-client/blob/master/test/index.js)

## Test
```
ava
```

## [About me](http://blog.chatbot.io/webcv/)

## LICENSE
MIT