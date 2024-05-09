import { validarClave } from "./validacionPass";

describe("validarClave", () => {
	it("Si los paramentos que recibimos son undifined lanza un error", () => {
		// Arrange
		const clave: any = undefined;
		const nombreUsuario: any = undefined;
		const commonPasswords: any = undefined;

		// Act
		const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);

		// Assert
		const esperado = "No has metido los argumentos correctamente";
		expect(resultado).toThrowError(esperado);
	});

	it("Si los paramentos que recibimos son null lanza un error", () => {
		// Arrange
		const clave: any = null;
		const nombreUsuario: any = null;
		const commonPasswords: any = null;

		// Act
		const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);

		// Assert
		const esperado = "No has metido los argumentos correctamente";
		expect(resultado).toThrowError(esperado);
	});

	it("Si los paramentos que recibimos son vacios lanza un error", () => {
		// Arrange
		const clave: string = "";
		const nombreUsuario: string = "";
		const commonPasswords: string[] = [""];

		// Act
		const resultado = () => validarClave(nombreUsuario, clave, commonPasswords);

		// Assert
		const esperado = "No has metido los argumentos correctamente";
		expect(resultado).toThrowError(esperado);
	});
});
