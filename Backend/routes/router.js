const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema")
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
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

router.post("/forgot-password", async (req, res) => {
    const { registerMobilenumber } = req.body;
    try {
      const oldUser = await userdb.findOne({ registerMobilenumber });
      if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }
      const secret = keysecret + oldUser.registerPassword;
      const token = jwt.sign({ registerMobilenumber: oldUser.registerMobilenumber, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`;
      console.log(link);
    //   var transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //       user: "adarsh438tcsckandivali@gmail.com",
    //       pass: "rmdklolcsmswvyfw",
    //     },
    //   });
  
    //   var mailOptions = {
    //     from: "youremail@gmail.com",
    //     to: "thedebugarena@gmail.com",
    //     subject: "Password Reset",
    //     text: link,
    //   };
  
    //   transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //     }
    //   });
    //   console.log(link);
    } catch (error) { }
  });



router.post("/reset-password", async (req, res) => {
    const {id, token } = req.params;
    console.log(req.params);
});
module.exports = router;