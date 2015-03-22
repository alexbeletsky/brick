var util = require('util');
var _ = require('underscore');

var tenantFields = [
	'id',
	'firstname',
	'lastname',
	'email',
	'countryCode',
	'city',
	'salesforceAccountID',
	'workCapacity',
	'isFulltimeEmployed'
];

function removeTenant(result) {
	return _.omit(result, 'user');
}

function wrapCallback(callback) {
	return function (err, results) {
		if (err) {
			return callback(err);
		}

		return util.isArray(results) ? callback(null, results.map(removeTenant)) : callback(null, removeTenant(results));
	};
}

function tenancy(user, data) {
	if (typeof user === 'function') {
		return wrapCallback(user);
	}

	return _.extend(data, {user: _.pick(user, tenantFields)});
}

tenancy.query = function (user, query) {
	return _.extend(query, {'user.id': user.id});
};

tenancy.fields = tenantFields;

module.exports = tenancy;
