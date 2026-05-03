import jwt from "jsonwebtoken"



export const getToken = async (userId) => {
    const JWT_SECRET = process.env.JWT_SECRET_KEY || process.env.JWT_SECRET
    if (!JWT_SECRET) {
        throw new Error("JWT secret env variable is required")
    }

    try {
        const token = jwt.sign({userId}, JWT_SECRET, { expiresIn: "7d" })
        console.log(token)
        return token
    } catch (error) {
        console.log(error)
        throw error
    }
}