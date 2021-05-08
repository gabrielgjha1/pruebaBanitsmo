const { Router } = require("express");
const { check } = require("express-validator");
const { login, renewToken } = require("../controllers/auth");
const { ValidarCampos } = require("../middleware/validar-campos");
const { validarJWT } = require("../middleware/validar-jwt");

const router = Router();

router.post(
  "/login",
  [
    check("password", "La contraseña es requerida").not().isEmpty(),
    check("user_name", "El correo es requerido").not().isEmpty(),
    ValidarCampos,
  ],
  login
);

router.get("/renewtoken", [validarJWT], renewToken);

module.exports = router;
