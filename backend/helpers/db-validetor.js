const Client = require("../models/clientes");
const Usuario = require("../models/usuario");

const validate_client_id = async (id = "") => {
  const client = await Client.findById(id);
  if (!client) {
    throw new Error("El cliente no existe");
  }
};

const existeUsuarioPorId = async (id) => {
  const ExisteId = await Usuario.findById(id);

  if (!ExisteId) {
    throw new Error("No existe el usuario");
  }
};

module.exports = {
  validate_client_id,
  existeUsuarioPorId,
};
