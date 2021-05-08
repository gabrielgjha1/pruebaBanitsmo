const { request, response } = require("express");
const Client = require("../models/clientes");

const TraerClienteId = async (req = request, res = response) => {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);

    return res.status(200).json({
      client,
      msg: "datos",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al traer los datos",
      error,
    });
  }
};

module.exports = {
  TraerClienteId,
};
