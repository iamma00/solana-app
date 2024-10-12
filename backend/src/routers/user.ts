import { PrismaClient } from "@prisma/client";
import { json, Router } from "express";
import  jwt from "jsonwebtoken";

const JWT_SECRET = "kirat123";
const router = Router();

const prismaClient = new PrismaClient();

//signin with wallet
router.post("/sigin",async(req, res)=>{

    const hardcodedWalletAddress = "";
    const existingUser = await prismaClient.user.findFirst({
        where: {
            address:hardcodedWalletAddress;
        }
    }) 

    if(existingUser){
        const token = jwt.sign({
            userId: existingUser.id
        },JWT_SECRET)
    }

});



export default router;