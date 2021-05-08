const { Router } = require("express");
const { TraerClienteId } = require("../controllers/client");
const { validarJWT } = require("../middleware/validar-jwt");
const { ValidarCampos } = require("../middleware/validar-campos");
const { check } = require("express-validator");
const { validate_client_id } = require("../helpers/db-validetor");

const router = Router();

router.get(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(validate_client_id),
    ValidarCampos,
  ],

  TraerClienteId
);

module.exports = router;
