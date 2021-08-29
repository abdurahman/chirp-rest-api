const jwt = require('jsonwebtoken');

// Checks authentication of user before accessing posts route [broken]
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.token.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }

    next();
};