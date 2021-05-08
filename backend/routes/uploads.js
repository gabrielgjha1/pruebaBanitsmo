const { Router } = require("express");
const { check } = require("express-validator");
const { ActualizarImagenCloudinary } = require("../controllers/uploads");
const { ValidarArchivo } = require("../middleware/validar-archivo");
const { ValidarCampos } = require("../middleware/validar-campos");

const router = Router();

//cloudinary
router.put(
  "/:coleccion/:id",
  [
    ValidarArchivo,
    check("id", "El id debe ser de mongo").isMongoId(),
    ValidarCampos,
  ],
  ActualizarImagenCloudinary
);

module.exports = router;
