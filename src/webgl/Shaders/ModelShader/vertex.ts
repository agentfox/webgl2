import locations from "./locations";

const vertexSource = `
    attribute vec3 ${locations.POSITION};
    void main() {
        gl_Position = vec4(${locations.POSITION}, 1.0);
    }
`;
export default vertexSource;
// attribute is thing to pass from cpu to gpu
