function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'El usuario ya existe'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'Usuario registrado'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'Gracias por visitarnos!'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'Por favor, registrese con un correo!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Email o contraseña incorrecta'
    })
}

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Por favor, verifica tu correo electrónico y volvé a intentar!'
    })
}

module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse
}