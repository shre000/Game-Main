const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema")
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const nodemailer = require('nodemailer');
const { generateResetToken, sendResetEmail } = require('../models/utils');
const jwt = require("jsonwebtoken");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const keysecret = "shreyasumanpandeysumanpandeyshre"
// for user registration
router.post("/register", async (req, res) => {

    const { 
        registerMobilenumber, 
        registerVerificationcode, 
        registerRecommendationcode,
        registerPassword, 
        registerRepeatPassword } = req.body;

    if (!registerMobilenumber || 
        !registerVerificationcode || 
        !registerRecommendationcode || 
        !registerPassword || 
        !registerRepeatPassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ registerMobilenumber: registerMobilenumber });

        if (preuser) {
            
            res.status(422).json({ error: "This MObile Number is Already Exist" })
        } else if (registerPassword !== registerRepeatPassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                registerMobilenumber, registerVerificationcode, registerRecommendationcode, registerPassword,registerRepeatPassword
            });

            // here password hasing

            const storeData = await finalUser.save();

            console.log(storeData);
            res.status(201).json({ status: 201, storeData })
        }

    } catch (error) {
        // Log the exact error message to the console
        console.error("Database Error:", error);
        res.status(422).json({ error: "An error occurred while processing your request" });
    }

});

// user Login

router.post("/login", async (req, res) => {
    console.log(req.body);

    const { registerMobilenumber, registerPassword } = req.body;

    if (!registerMobilenumber || !registerPassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
       const userValid = await userdb.findOne({registerMobilenumber:registerMobilenumber});
        console.log(userValid);
        if(userValid){

            const isMatch = await bcrypt.compare(registerPassword,userValid.registerPassword);
console.log(isMatch);
            if(!isMatch){
                res.status(422).json({ error: "Password Didn't Match"})
            }else{

                // token generate
                const token = await userValid.generateAuthtoken();
                console.log(token);
                // cookiegenerate
                res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201,result})
            }
        }

    } catch (error) {
        res.status(401).json(error);
        console.log(error);
    }
});

// // user valid
router.get("/validuser",authenticate,async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});
// // user logout

router.get("/logout",authenticate,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(500).json({ status: 500, error: "Internal Server Error" }); // Handle any other errors with a 500 status
    }
})

router.post('/forgot-password', (req, res) => {
    const { email ,registerMobilenumber} = req.body;
    console.log(email)
    console.log(registerMobilenumber)

    const users = userdb.findOne({ registerMobilenumber: registerMobilenumber  })
    .then(user => {
        if(!user) {
            console.log(user)
            console.log(users)

            return res.send({Status: "User not existed"})
        } 
        console.log(user)
        console.log(users)
        const token = jwt.sign({id: user._id}, keysecret, {expiresIn: "1d"})
        console.log(user._id);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'shriancodes@gmail.com',
              pass: 'lqoq aagl alck cttx'
            }
          });
          
          var mailOptions = {
            from: 'sumanshreya000@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:3000/reset_password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
                console.log("Email sent: " + info.response);
              return res.send({Status: "Success"})
            }
          });
    })
})

router.post('/reset-password/:id/:token', (req, res) => {
    const {id, token} = req.params
    const {newpassword} = req.body

    jwt.verify(token,keysecret, (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcrypt.hash(newpassword, 10)
            .then(hash => {
                userdb.findByIdAndUpdate({_id: id}, {registerPassword: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    })
})


router.post("/orders", async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

router.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

  
module.exports = router;