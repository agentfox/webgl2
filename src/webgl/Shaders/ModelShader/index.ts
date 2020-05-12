import GLC from "../../GLcommanders";
import vertexSource from "./vertex";
import fragmentSource from "./fragment";
import locations from "./locations";

export default class ModelShader {
	program: WebGLProgram | null = null;
	positionAttribute: number | null;
	constructor() {
		const vertexShader = GLC.createVertexShader();
		if (vertexShader) {
			console.log("modelShader: vtxsh");
			GLC.addShaderSource(vertexShader, vertexSource);
			GLC.compileShader(vertexShader);
		}

		const fragmentShader = GLC.createFragmentShader();
		if (fragmentShader) {
			console.log("modelShader:  fsh");
			GLC.addShaderSource(fragmentShader, fragmentSource);
			GLC.compileShader(fragmentShader);
		}

		const program = GLC.createShaderProgram();
		if (program && vertexShader && fragmentShader) {
			console.log("modelShader: program, vtxsh, fsh");
			GLC.attachShaderToProgram(program, vertexShader);
			GLC.attachShaderToProgram(program, fragmentShader);
			GLC.linkProgram(program);
		}

		this.positionAttribute =
			program && GLC.getAttributeLocation(program, locations.POSITION);
		this.program = program;
	}
	use = () => {
		if (this.program) {
			console.log("ddhdhdh");
			GLC.useProgram(this.program);
		}
	};
	enablePosition = () => {
		if (this.positionAttribute) {
			console.log("fnjnnf");
			GLC.enableVertexAttribArray(this.positionAttribute);
			GLC.pointToAttribute(this.positionAttribute, 3);
		}
	};
}
