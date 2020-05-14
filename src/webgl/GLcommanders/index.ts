class GLCommander {
	// @ts-ignore
	gl: WebGL2RenderingContext;

	init(gl: WebGL2RenderingContext) {
		this.gl = gl;
	}

	clear = (r: number, g: number, b: number, a: number) => {
		this.gl.clearColor(r, g, b, a);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	};

	viewport = () =>
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	depthTest = (use: boolean) =>
		use
			? this.gl.enable(this.gl.DEPTH_TEST)
			: this.gl.disable(this.gl.DEPTH_TEST);

	//// create a buffer to store data
	createBuffer = () => this.gl.createBuffer();

	//// float buffers are used to store vertices
	// bind proper type of arraybuffer to the buffer object
	bindArrayBuffer = (buffer: WebGLBuffer) => {
		return this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
	};
	// add binded arraybuffer to the the vertex buffer object
	addArrayBufferData = (vertices: Array<number>) => {
		this.gl.bufferData(
			this.gl.ARRAY_BUFFER,
			new Float32Array(vertices),
			this.gl.STATIC_DRAW
		);
	};
	// unbind buffer object to avoid ... i don't know yet
	unbindArrayBuffer = () => this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

	//// int buffers are used to store indices
	// bind proper type of arraybuffer to the buffer object
	bindElementArrayBuffer = (buffer: WebGLBuffer) =>
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
	// add binded arraybuffer to the the vertex buffer object
	addElementArrayBufferData = (indices: Array<number>) => {
		this.gl.bufferData(
			this.gl.ELEMENT_ARRAY_BUFFER,
			new Uint16Array(indices),
			this.gl.STATIC_DRAW
		);
	};
	// unbind buffer object to avoid ... i don't know yet
	unbindElementArrayBuffer = () =>
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);

	// shader functions
	createVertexShader = () => this.gl.createShader(this.gl.VERTEX_SHADER);
	createFragmentShader = () => this.gl.createShader(this.gl.FRAGMENT_SHADER);

	addShaderSource = (shader: WebGLShader, source: string) =>
		this.gl.shaderSource(shader, source);
	compileShader = (shader: WebGLShader) => this.gl.compileShader(shader);
	createShaderProgram = () => this.gl.createProgram();
	attachShaderToProgram = (program: WebGLProgram, shader: WebGLShader) =>
		this.gl.attachShader(program, shader);

	linkProgram = (program: WebGLProgram) => this.gl.linkProgram(program);
	useProgram = (program: WebGLProgram) => this.gl.useProgram(program);

	getAttributeLocation = (program: WebGLProgram, attribute: string) =>
		this.gl.getAttribLocation(program, attribute);

	enableVertexAttribArray = (index: number) =>
		this.gl.enableVertexAttribArray(index);
	pointToAttribute = (data: number, dimmensions: number) =>
		this.gl.vertexAttribPointer(
			data,
			dimmensions,
			this.gl.FLOAT,
			false,
			0,
			0
		);

	drawTriangle = (noOfIndices: number) => {
		this.gl.drawElements(
			this.gl.TRIANGLES,
			noOfIndices,
			this.gl.UNSIGNED_SHORT,
			0
		);
	};
}

const GLC = new GLCommander();
export default GLC;
