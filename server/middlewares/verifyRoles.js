const verifyRoles = (...allowedRoles)=>{
    return (req, res, next )=>{
        if (!req?.roles) return res.status(401)
        const rolesArray = [...allowedRoles];
        console.log(rolesArray)
        console.log(req.roles)
        const result = req.roles.map(roles=>rolesArray.includes(roles)).find(val=>val===true);
        if (!result) return res.status(401);
        next()
    }
}
module.exports = verifyRoles