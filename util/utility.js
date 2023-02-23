var randomstring = require("randomstring");

exports.generateStoreCode = () => {
    return randomstring.generate({
        length: 3,
        charset: 'alphabetic',
        capitalization: 'uppercase'
    });
} 