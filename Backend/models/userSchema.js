const mongoose = require("mongoose");
//const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = "shreyasumanpandeysumanpandeyshre";


const userSchema = new mongoose.Schema({
    registerMobilenumber: {
        type: Number,
        required: true,
        trim: true
    },
    registerVerificationcode: {
        type: Number,
        required: true,
        trim: true
    },
    registerRecommendationcode: {
        type: Number,
        required: true,
        trim: true
    },
    registerPassword: {
        type: String,
        required: true,
        minlength: 5
    },
    registerRepeatPassword: {
        type: String,
        required: true,
        minlength: 5
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

userSchema.pre("save",async function(next){
    if (this.isModified("registerPassword")) {
    this.registerPassword = await bcrypt.hash(this.registerPassword, 12);
    this.registerRepeatPassword = await bcrypt.hash(this.registerRepeatPassword, 12);
    }
    next()

});

// token generate
userSchema.methods.generateAuthtoken = async function () {
    try {
        let token23 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: token23 });
        await this.save();
        
        console.log(token23); // Log the token
        return token23;
    } catch (error) {
        console.error(error);
        return error; // Return the error
    }
}


// createing model
const userdb = new mongoose.model("authUsers", userSchema);


module.exports =userdb;