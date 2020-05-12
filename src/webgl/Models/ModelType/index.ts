import GLC from "../../GLcommanders";
import ModelShader from "../../Shaders/ModelShader";

export default class ModelType {
	vertices: Array<number>;
	indices: Array<number>;
	vertexBuffer: WebGLBuffer | null = null;
	indexBuffer: WebGLBuffer | null = null;
	constructor(vertices: Array<number>, indices: Array<number>) {
		this.vertices = vertices;
		this.indices = indices;
		this._genVertexBuffer();
		this._genIndexBuffer();
	}

	_genVertexBuffer = () => {
		this.vertexBuffer = GLC.createBuffer();
		if (this.vertexBuffer) {
			GLC.bindArrayBuffer(this.vertexBuffer);
			GLC.addArrayBufferData(this.vertices);
			GLC.unbindArrayBuffer();
		}
	};

	_genIndexBuffer = () => {
		this.indexBuffer = GLC.createBuffer();
		if (this.indexBuffer) {
			GLC.bindElementArrayBuffer(this.indexBuffer);
			GLC.addElementArrayBufferData(this.indices);
			GLC.unbindElementArrayBuffer();
		}
	};

	use = (shader: ModelShader) => {
		if (this.vertexBuffer && this.indexBuffer) {
			GLC.bindArrayBuffer(this.vertexBuffer);
			shader.enablePosition();
			GLC.bindElementArrayBuffer(this.indexBuffer);
		}
	};
}

export const abc = "aan";
