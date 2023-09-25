require("dotenv").config();

const dev = {
    app : {
        port : process.env.PORT || 5000
    },
    db : {
        url : process.env.DB_URL || "mongodb:http://localhost:5000/usersDemoDB"
    }
};

module.exports = dev;