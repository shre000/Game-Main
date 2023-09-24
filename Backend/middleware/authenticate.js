const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema");
const keysecret = "shreyasumanpandeysumanpandeyshre"

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token)
        if (!token) {
            // If no token is provided, return a 401 Unauthorized response
            return res.status(401).json({ status: 401, message: "Unauthorized: No token provided" });
        }

        try {
            console.log(token);
            console.log(keysecret);
            const verifytoken = jwt.verify(token, keysecret);
console.log(verifytoken);
            // Optionally, you can check token expiration here (requires "exp" claim in the token)
            // const currentTimestamp = Math.floor(Date.now() / 1000);
            // if (verifytoken.exp && verifytoken.exp < currentTimestamp) {
            //     return res.status(401).json({ status: 401, message: "Unauthorized: Token expired" });
            // }

            const rootUser = await userdb.findOne({ _id: verifytoken._id });
console.log(rootUser);
            if (!rootUser) {
                throw new Error("User not found");
            }

            req.token = token;
            req.rootUser = rootUser;
            req.userId = rootUser._id;

            next();
        } catch (error) {
            console.error("JWT Verification Error:", error);
            return res.status(401).json({ status: 401, message: "Unauthorized: Invalid token" });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};

module.exports = authenticate;
