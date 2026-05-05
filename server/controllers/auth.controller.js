import UserModel from "../models/user.model.js"
import { getToken } from "../utils/token.js"


export const googleAuth = async (req,res) => {
    try {
        
        const {name , email} = req.body
        if (!name || !email) {
            throw new Error("Google auth request is missing name or email")
        }
        let user = await UserModel.findOne({email})
        if(!user){
            user = await UserModel.create({
                name , email
            })
        }
        let token = await getToken(user._id)
        const cookieOptions = {
            httpOnly: true,
            secure: "true",
            sameSite: "none",
            path : "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        }

        res.cookie('token', token, cookieOptions)
        return res.status(200).json(user)
    } catch (error) {
        console.error("googleAuth error:", error)
        return res.status(500).json({message:`googleSignup Error ${error.message || error}`})
    }
    
}

export const logOut = async (req,res) => {
    try {
        await res.clearCookie("token")
         return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
        return res.status(500).json({message:`Logout Error  ${error}`})
    }
}
