
// Opt in to strict mode of JavaScript, [ref](http://is.gd/3Bg9QR)
// Use this statement, you can stay away from several frequent mistakes 
'use strict';

    // @namespace NR.UA 
var UA = module.exports = {};
    
    // @enum {RegExp}
var REGEX_UA_MATCHER = {
    
        // the behavior of Google Chrome, Safari, Maxthon 3+, 360 is dependent on the engine they based on
        // so we will no more detect the browser version but the engine version
        
        // NR.UA.chrome and NR.UA.safari are removed
        webkit  : /webkit[ \/]([^ ]+)/,
        opera   : /opera(?:.*version)?[ \/]([\w.]+)/,
        ie      : /msie ([\w.]+)/,
        mozilla : /mozilla(?:.*? rv:([\w.]+))?/
    };
    
var DEFAULT_PLATFORM = 'other';
    
var userAgent = navigator.userAgent.toLowerCase();
var platform = navigator.platform.toLowerCase();


// userAgent
['webkit', 'opera', 'ie', 'mozilla'].forEach(function(name){
    var ua = UA;

    if(!ua.version){
        var match = userAgent.match(REGEX_UA_MATCHER[name]);
            
        if(match){
            ua[name] = ua.version = parseInt(match[1]);
            UA.fullVersion = match[1];
        }
    }
});


UA.platform = platform = platform.match(/ip(?:ad|od|hone)/) ? 'ios' 
    : ( platform.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || [DEFAULT_PLATFORM] )[0];


if(platform !== DEFAULT_PLATFORM){
    UA[platform] = true;
}