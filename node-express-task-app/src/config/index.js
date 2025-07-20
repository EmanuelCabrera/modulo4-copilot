const dotenv = require('dotenv');

dotenv.config();


const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
};

module.exports = config;