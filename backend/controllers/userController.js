// login user controller

const loginUser = async(req, res) => {
    res.json({
        msg: "User logged in"
    })
}

// signup user controller

const signUpUser = async(req, res) => {
    res.json({
        msg: "user signUp successful"
    })
}

module.exports = { loginUser, signUpUser}