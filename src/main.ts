import { commonPasswords } from "./validacionPass/modelo";
import { validarClave } from "./validacionPass/validacionPass";

const clave = "pepito";
const nombreUsuario = "terminator";

validarClave(nombreUsuario, clave, commonPasswords);
