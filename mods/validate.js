/**
 * Desc:验证模块
 * Created by bytesu on 15/9/23.
 */
var Validate = {};
/**
 * 验证为数字
 * @param num
 * @returns {boolean}
 */
Validate.isNumber = function(num){
    return /\d+/.test(num);
};

module.exports = Validate;