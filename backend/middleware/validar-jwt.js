const jwt = require("jsonwebtoken");
const { response, request } = require("express");
const Usuario = require("../models/usuario");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "El token no vino en los headers",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETPRIVATEKEY);
    const usuario = await Usuario.findOne({ _id: uid });
    req.uid = uid;

    if (!usuario) {
      return res.status(401).json({
        msg: "Usuario no encontrado",
      });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "no es validox2",
    });
  }
};

module.exports = {
  validarJWT,
};
