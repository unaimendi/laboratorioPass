import { ValidacionClave } from "./modelo";
import { tieneMayusculasYMinusculas, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validacionPass.helpers";

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
	if (!nombreUsuario || !clave || !commonPasswords) {
		throw new Error("No has metido los argumentos correctamente");
	}

	const errorMayusMinus = tieneMayusculasYMinusculas(clave);
	if (!errorMayusMinus.esValida) return errorMayusMinus;

	const errorNumeros = tieneNumeros(clave);
	if (!errorNumeros.esValida) return errorNumeros;

	const errorCaracteresEspeciales = tieneCaracteresEspeciales(clave);
	if (!errorCaracteresEspeciales.esValida) return errorCaracteresEspeciales;

	const errorLongitud = tieneLongitudMinima(clave);
	if (!errorLongitud.esValida) return errorLongitud;

	const errorTieneUsuario = tieneNombreUsuario(nombreUsuario, clave);
	if (!errorTieneUsuario.esValida) return errorTieneUsuario;

	return tienePalabrasComunes(clave, commonPasswords);
};
