;(function(global) {
    "use strict";
    var DsUtil = function(ops) {}
    DsUtil.prototype = {
        sayHi: function() {
            console.log("hello npm")
        }
    }
    if(typeof module !== 'undefined' && module.exports) {
        module.exports = DsUtil
    }else if(typeof define === 'function') {
        define(function() {
            return DsUtil;
        });
    }
    global.DsUtil = DsUtil;
})(this);