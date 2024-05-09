import { ValidacionClave, commonPasswords } from "./modelo";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validacionPass.helpers";

describe("tieneMayusculasYMinusculas", () => {
	it("Si no metemos ninguna letra mayúscula debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "oihfjasf";

		// Act
		const resultado = tieneMayusculasYMinusculas(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave debe llegar alguna mayúscula",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si no metemos ninguna letra minúscula debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "DSFDASF";

		// Act
		const resultado = tieneMayusculasYMinusculas(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave debe llegar alguna minúscula",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si metemos tanto letras minúsculas como mayúsculas debe devolver un objeto que pase la validación y ningún mensaje de error", () => {
		// Arrange
		const clave = "Dgdfaf";

		// Act
		const resultado = tieneMayusculasYMinusculas(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: true,
		};
		expect(resultado).toEqual(esperado);
	});
});

describe("tieneNumeros", () => {
	it("Si no metemos ningún número debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "oihfjasf";

		// Act
		const resultado = tieneNumeros(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave debe llegar algún número",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si metemos algún número debe devolver un objeto que pase la validación y ningún mensaje de error", () => {
		// Arrange
		const clave = "Dgdfaf5";

		// Act
		const resultado = tieneNumeros(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: true,
		};
		expect(resultado).toEqual(esperado);
	});
});

describe("tieneCaracteresEspeciales", () => {
	it("Si no metemos ningún carácter especial debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "fdasf";

		// Act
		const resultado = tieneCaracteresEspeciales(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave debe llegar algún carácter especial",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si metemos algún carácter especial debe devolver un objeto que pase la validación y ningún mensaje de error", () => {
		// Arrange
		const clave = "fdasf!";

		// Act
		const resultado = tieneCaracteresEspeciales(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: true,
		};
		expect(resultado).toEqual(esperado);
	});
});

describe("tieneLongitudMinima", () => {
	it("Si no metemos una clave con una longitud mínima de 8 carácteres debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "fdasf";

		// Act
		const resultado = tieneLongitudMinima(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave debe tener una longitud minima de 8 carácteres",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si metemos una clave con una longitud superior a la de 8 carácteres debe devolver un objeto que pase la validación y ningún mensaje de error", () => {
		// Arrange
		const clave = "gergervggfs";

		// Act
		const resultado = tieneLongitudMinima(clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: true,
		};
		expect(resultado).toEqual(esperado);
	});
});

describe("tieneNombreUsuario", () => {
	it("Si la clave contiene el nombre de usuario debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "fdasfpepito";
		const nombreUsuario = "pepito";

		// Act
		const resultado = tieneNombreUsuario(nombreUsuario, clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave no debe contener el nombre de usuario",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si la clave no contiene el nombre de usuario debe devolver un objeto que pase la validación y ningún mensaje de error", () => {
		// Arrange
		const clave = "gergervggfs";
		const nombreUsuario = "pepito";

		// Act
		const resultado = tieneNombreUsuario(nombreUsuario, clave);

		// Assert
		const esperado: ValidacionClave = {
			esValida: true,
		};
		expect(resultado).toEqual(esperado);
	});
});

describe("tienePalabrasComunes", () => {
	it("Si la clave contiene palabras clave debe devolver un objeto que no pase la validación y envie el mensaje de error correspondiente", () => {
		// Arrange
		const clave = "fdasf123123";

		// Act
		const resultado = tienePalabrasComunes(clave, commonPasswords);

		// Assert
		const esperado: ValidacionClave = {
			esValida: false,
			error: "La clave no debe contener palabras clave",
		};
		expect(resultado).toEqual(esperado);
	});

	it("Si la clave no contiene palabras clave debe devolver un objeto que pase la validación y ningún mensaje de error", () => {
		// Arrange
		const clave = "gergervggfs";

		// Act
		const resultado = tienePalabrasComunes(clave, commonPasswords);

		// Assert
		const esperado: ValidacionClave = {
			esValida: true,
		};
		expect(resultado).toEqual(esperado);
	});
});
