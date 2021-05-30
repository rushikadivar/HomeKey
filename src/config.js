require('./Backend/dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    JWT_SECRET: JWT_SECRET
}

console.log(JWT_SECRET);