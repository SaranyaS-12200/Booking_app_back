import express from "express";

const router = express.Router();

router.get("/userinput",(req,res)=>{
    res.send("Hello, this is users endpoint");
})
export default router
