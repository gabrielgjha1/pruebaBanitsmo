const { Router } = require("express");
const { check } = require("express-validator");
const { usuariosGet, usuariosPost } = require("../controllers/usuarios");
const { ValidarCampos } = require("../middleware/validar-campos");

const router = Router();

router.get("/", usuariosGet);

router.post(
  "/",
  [
    check("user_name", "El nombre  Es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio y mas de 6 letras").isLength({
      min: 6,
    }),
    check("nombre", "El nombre  Es obligatorio").not().isEmpty(),
    ValidarCampos,
  ],
  usuariosPost
);

module.exports = router;
