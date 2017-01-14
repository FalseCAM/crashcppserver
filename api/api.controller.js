'use strict';

exports.hello = function (req, res) {
    return res.status(200).send('Hello World!');
}
