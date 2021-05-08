const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req, res = response) => {
  const { user_name, password } = req.body;

  try {
    //Verificar si el email existe
    const usuario = await Usuario.findOne({ user_name });

    if (!usuario) {
      return res.status(400).json({
        msg: "Error, datos incorrectos",
      });
    }

    //verificar la contraseña
    const validarPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validarPassword) {
      return res.status(400).json({
        msg: "Error, datos incorrectos",
      });
    }

    //generar JWT
    const token = await generarJWT(usuario.id);

    return res.json({
      usuario,
      token,
      msg: "login ok",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const renewToken = async (req, res) => {
  const uid = req.uid;
  console.log(uid);

  const usuario = await Usuario.findById(uid);

  res.json({
    ok: true,
    usuario,
  });
};

module.exports = {
  login,
  renewToken,
};
