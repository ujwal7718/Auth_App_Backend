const express = require("express");

const router = express.Router();

const{login , signup} = require("../controllers/Auth");
const{auth,isStudent,isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup",signup);


router.get("/test",auth, (req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route of Test',
    }); 
});
//protected routes
router.get("/student",auth,isStudent, (req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route of Student',
    }); 
});

router.get("/admin",auth,isAdmin, (req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route of Admin',
    }); 
}); 

module.exports = router;