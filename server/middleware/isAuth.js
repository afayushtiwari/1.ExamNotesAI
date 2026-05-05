import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const isAuth = async (req,res,next) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET_KEY;
        let {token} = req.cookies
        if(!token){
            return res.status(400).json({message:"Token is not found"})
        }

        if (!JWT_SECRET) {
            return res.status(500).json({message:"JWT secret env variable is required"})
        }

        let verifyToken = jwt.verify(token, JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({message:"user doesn't have valid token"})
        }
        req.userId = verifyToken.userId
        next()

    } catch (error) {
        console.error("isAuth error:", error)
        return res.status(500).json({message:`is auth error ${error.message || error}`})
    }
}
export default isAuth