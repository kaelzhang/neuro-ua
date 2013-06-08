# neuro-ua

> module ua for neuron and cortex

## Getting Started
Before anything taking its part, you should install [node](http://nodejs.org) and "cortex".

#### Install Node

Visit [http://nodejs.org](http://nodejs.org), download and install the proper version of nodejs.

#### Install Cortex

    # maybe you should use `sudo`
    npm install -g cortex

## Using neuro-ua In Your Project

First, install 'neuro-ua' directly with `ctx install` (recommended)
	
	ctx install neuro-ua --save
	
or, you could update your package.json manually
    
    dependencies: {
        'neuro-ua': '<version-you-want>'
    }
    
and install dependencies
	
	ctx install
    
Then, use `require` method in your module
    
    var neuro-ua = require('neuro-ua');
    
Finally, start cortex server
    
    ctx server
    
Then cortex will care all the rest.


## API Documentation

### Attension!

##### 大部分时候，你都不应当使用浏览器检测来处理你的代码，除非万不得已! 

##### 特征检测(feature detection) > 浏览器检测(browser detection)


UA.[engine]
----
{int=} 它包括

- UA.webkit
- UA.opera
- UA.ie
- UA.mozilla

### 说明
当用户的浏览器引擎为 webkit 时，`UA.webkit` 的值为当前浏览器核心或者浏览器的主版本号。

比如，用户的浏览器引擎核心为 AppleWebKit/537.11 时，有 `UA.webkit === 537`

其他同理

### Example

要判断是否为 IE6-7，可以用：

	if(UA.ie < 8){
		// code...
	}
	
	# 为什么可以不用 UA.ie && UA.ie < 8，读者可以思考一下。

UA.version
----
{int=} 当前浏览器引擎核心的主版本


UA.fullVersion
----
{string} 当前浏览器核心的完整版本

UA.[platform]
----
{true=} 它包括

- UA.ios
- UA.webos
- UA.android
- UA.mac
- UA.win
- UA.linux

UA.platform
----
{string=} 用户操作系统的简称，可以为 `"ios"`, `"webos"`, `"android"`, `"mac"`, `"win"`, `"linux"`, 或者 `undefined`