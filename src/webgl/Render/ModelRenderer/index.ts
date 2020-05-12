import GLC from "../../GLcommanders";
import ModelShader from "../../Shaders/ModelShader";
import ModelType from "../../Models/ModelType";

export default class ModelRenderer {
	shader: ModelShader;
	models: any = {};
	constructor() {
		this.shader = new ModelShader();
	}

	preRender = () => {
		GLC.viewport();
		GLC.depthTest(true);
	};

	render = () => {
		this.preRender();
		this.shader.use();
		Object.keys(this.models).forEach((id) => {
			this.models[id].type.use(this.shader);
			this.models[id].instances.forEach(() => {
				GLC.drawTriangle(this.models[id].type.indices.length);
			});
		});
	};

	registerNewModel = (model: ModelType, id: string) => {
		if (!this.models[id]) {
			this.models[id] = {
				type: model,
				instances: [],
			};
		}
	};

	addInstance = (instance: string, id: string) => {
		this.models[id].instances.push(instance);
	};
}
