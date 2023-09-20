const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema")
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
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

        if(userValid){

            const isMatch = await bcrypt.compare(registerPassword,userValid.registerPassword);

            if(!isMatch){
                res.status(422).json({ error: "invalid details"})
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

// router.get("/logout",authenticate,async(req,res)=>{
//     try {
//         req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
//             return curelem.token !== req.token
//         });

//         res.clearCookie("usercookie",{path:"/"});

//         req.rootUser.save();

//         res.status(201).json({status:201})

//     } catch (error) {
//         res.status(401).json({status:401,error})
//     }
// })


module.exports = router;