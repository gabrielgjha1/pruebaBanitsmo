const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");

const usuariosGet = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query;

  const [total, usuarios] = await Promise.all([
    Usuario.find({ estado: true }).skip(Number(desde)).limit(Number(limite)),
    Usuario.countDocuments({ estado: true }),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPost = async (req, res = response) => {
  const { nombre, password, user_name } = req.body;

  try {
    const usuario = new Usuario({ nombre, password, user_name });
    const username_exist = await Usuario.findOne({ user_name });

    if (username_exist) {
      return res.status(400).json({
        msg: "El usuario ya esta registrado",
      });
    }

    //Enctriptar la contraseña

    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en BD
    await usuario.save();
    console.log("h");

    return res.json({
      msg: "Usuario Guardado",
      usuario,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "El usuario no fue guardado",
      error,
    });
  }
};

module.exports = {
  usuariosPost,
  usuariosGet,
};
