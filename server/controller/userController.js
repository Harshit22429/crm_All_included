const User = require("../model/user");
const AutoIncrement = require('mongoose-sequence')

const createNewUser = async (req, res) => {
    try {
        const { name, userProfile, email, phone, parentId } = req.body;
        // const startSeq = 1000;
        // const uniqueSeq = AutoIncrement(startSeq)
        // const newUserId = name.slice(0, 4) + uniqueSeq;
        // console.log(newUserId);
        const userCreated = await User.create({
            name,
            userProfile,
            email,
            phone,            
            parentId
        })
        res.send(userCreated);
    } catch (error) {
        console.log(error.message)

    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId
        console.log(userId);

        const { email, phone, userProfile } = req.body;
        const userUpdated = await User.findOneAndUpdate({ userId: userId }, {
            $set: {
                email: email,
                phone: phone,
                userProfile: userProfile
            }
        })
        res.send("Successfully Updated");
    } catch (error) {
        console.log(error.message)

    }
}

const getAllUser = async (req, res) => {
    try {
        const parentId = req.params.parentId;
        const userFind = await User.find({ parentId : parentId });
        res.send(userFind);
    } catch (error) {
        console.log(error.message)
    }
}

const getUser = async(req,res)=>{
    try{
        const userId= req.params.userId;
        const getUser = await User.find({userId:userId})
        res.send(getUser)
    }catch(error){
        console.log(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userID = req.params.userID;
        const userDelete = await User.findOneAndDelete({ userID: userID });
        res.send(userDelete)
    } catch (error) {
        console.log(error.message)
    }
}




module.exports = { createNewUser,
    updateUser,
    getAllUser,
    deleteUser };