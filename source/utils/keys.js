function createKeyDrivers(region) {
	return region + ':drivers';
}

function createKeyFromAddress(region, address) {
	address = address.replace(/[, \.]+/g, ':').toLowerCase();
	return region + ':addresses:' + address;
}

module.exports = {
	address: createKeyFromAddress,
	drivers: createKeyDrivers
};
