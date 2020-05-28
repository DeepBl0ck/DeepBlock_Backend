/*============================
    check user's session
============================*/
'use strict'
const responseHandler = require('@utils/responseHandler');

const authenticator = (req, res, next) => {
	if (typeof req.session.userID !== 'undefined' || typeof req.session.username !== 'undefined') {
		return next();
	} else {
		return responseHandler.fail(res, 401, "로그인이 필요합니다");
	}
};

module.exports = authenticator;
