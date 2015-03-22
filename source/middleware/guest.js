function guest () {
    return function _guest (req, res, next) {
        req.guestAccess = true;
        next ();
    };
}

module.exports = guest;
