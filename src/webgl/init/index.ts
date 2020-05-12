import GLC from "../GLcommanders";
import ModelRenderer from "../Render/ModelRenderer";
import ModelType from "../Models/ModelType";

const initializer = (id: string) => {
	const canvas: HTMLCanvasElement | null = document.querySelector(`#${id}`);
	if (!canvas) return;

	const gl: WebGL2RenderingContext | null = canvas.getContext("webgl2");
	if (!gl) {
		console.log("WebGL2 not available");
		return;
	}

	GLC.init(gl);

	const vertices = [0.0, 0.5, 0.0, -0.5, -0.5, -0.5, 0.5, -0.5, 0.0];

	const indices = [0, 1, 2];

	const modelRenderer = new ModelRenderer();
	modelRenderer.registerNewModel(
		new ModelType(vertices, indices),
		"mytriangle"
	);
	modelRenderer.addInstance("instance1", "mytriangle");
	GLC.clear(1.0, 1.0, 1.0, 1.0);
	modelRenderer.render();

	// const render = () => {
	// 	GLC.clear(1, 0.7, 0.8, 1.0);
	// 	window.requestAnimationFrame(render);
	// };

	// window.requestAnimationFrame(render);
};

export default initializer;
