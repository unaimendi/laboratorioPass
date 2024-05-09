import { ValidacionClave } from "./modelo";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
	const todoMayuscula: string = clave.toUpperCase();
	const todoMinuscula: string = clave.toLowerCase();

	if (clave === todoMinuscula) {
		return {
			esValida: false,
			error: "La clave debe llegar alguna mayúscula",
		};
	}

	if (clave === todoMayuscula) {
		return {
			esValida: false,
			error: "La clave debe llegar alguna minúscula",
		};
	}

	return {
		esValida: true,
	};
};

export const tieneNumeros = (clave: string): ValidacionClave => {
	const listaNumeros: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	for (let i = 0; i < listaNumeros.length; i++) {
		if (clave.includes(listaNumeros[i])) {
			return {
				esValida: true,
			};
		}
	}
	return {
		esValida: false,
		error: "La clave debe llegar algún número",
	};
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
	const listaCaracteresEspeciales: string[] = ["@", "#", "+", "_", "!", "?", "¿", "¡", "-"];

	for (let i = 0; i < listaCaracteresEspeciales.length; i++) {
		if (clave.includes(listaCaracteresEspeciales[i])) {
			return {
				esValida: true,
			};
		}
	}
	return {
		esValida: false,
		error: "La clave debe llegar algún carácter especial",
	};
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
	if (clave.length > 7) {
		return {
			esValida: true,
		};
	}
	return {
		esValida: false,
		error: "La clave debe tener una longitud minima de 8 carácteres",
	};
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
	if (clave.includes(nombreUsuario)) {
		return {
			esValida: false,
			error: "La clave no debe contener el nombre de usuario",
		};
	}
	return {
		esValida: true,
	};
};

export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
	for (let i = 0; i < commonPasswords.length; i++) {
		if (clave.includes(commonPasswords[i])) {
			return {
				esValida: false,
				error: "La clave no debe contener palabras clave",
			};
		}
	}
	return {
		esValida: true,
	};
};
