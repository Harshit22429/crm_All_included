const User = require('../model/user');
const jwt = require('jsonwebtoken');
const user = require('../model/user');
const dotenv = require('dotenv').config({ path: '../config.env' });
const { compare } = require('bcryptjs')
const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const userLogin = await User.findOne({ email, password })
        const userDetailForFront = {
            name: userLogin.name,
            id: userLogin._id,
            email: userLogin.email,
            phone: userLogin.phone,            
            parentId: userLogin.parentId,
            userId: userLogin.userId,
        }
        console.log(userDetailForFront)
        // console.log(process.env.SECRET_KEY)
        // console.log(userLogin)
        if (userLogin) {
            const accessToken = jwt.sign({
                name: userLogin.name,
                email: userLogin.email,
                phone: userLogin.phone
            }, process.env.SECRET_KEY,
                {
                    expiresIn: "1m"
                })

            const refreshToken = jwt.sign({
                name: userLogin.name,
                email: userLogin.email,
                phone: userLogin.phone
            }, process.env.REFRESH_SECRET_KEY,
                {
                    expiresIn: '7d'
                })
            userLogin.refreshToken = refreshToken
            const result = await userLogin.save();

            console.log(result);
            res.cookie('userjwt', refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            return res.json({ accessToken, userDetailForFront })
        }
        else {
            return res.status(400).json({ status: 'error', user: "does not exist" })
        }
    } catch (error) {
        res.send(error.message)
    }
}

const loginRefresh = (req, res) => {
    const cookies = req.cookies
    console.log(cookies.userjwt)
    if (!cookies?.userjwt) return res.status(401).json({ message: "UnAuthorized" })
    const refreshToken = cookies.userjwt
    // console.log(cookies.userJWT)
    console.log(cookies.userjwt)
    jwt.verify(
        refreshToken,
        process.env.REFRESH_SECRET_KEY,
        async (err, decoded) => {
            if (err) return res.status(403).json({ message: "Forbidden" })

            const foundUser = await User.findOne({ name: decoded.name })
            if (!foundUser) return res.status(401).json({ message: "Unauthorize" })

            const accessToken = jwt.sign({
                name: foundUser.name,
                email: foundUser.email,
                phone: foundUser.phone
            }, process.env.SECRET_KEY,
                {
                    expiresIn: "1m"
                })
            res.json({
                accessToken,
                foundUser
            })
        })

}

const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.userjwt) return res.sendStatus(204)
    res.clearCookie('userjwt', { httpOnly: true, sameSite: "None", secure: true })
    res.json({ message: "Cookie cleared" })
}
module.exports = {
    login,
    loginRefresh,
    logout
};