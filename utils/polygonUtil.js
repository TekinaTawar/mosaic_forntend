export const calculatePerimeter = (vertices) => {
  let perimeter = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    const [x1, y1] = vertices[i];
    const [x2, y2] = vertices[i + 1];
    perimeter += Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  // Adding distance from last vertex to the first
  const [firstX, firstY] = vertices[0];
  const [lastX, lastY] = vertices[vertices.length - 1];
  perimeter += Math.sqrt(
    Math.pow(firstX - lastX, 2) + Math.pow(firstY - lastY, 2)
  );
  return perimeter;
};

export const calculateArea = (vertices) => {
  let area = 0;
  for (let i = 0; i < vertices.length - 1; i++) {
    area +=
      vertices[i][0] * vertices[i + 1][1] - vertices[i + 1][0] * vertices[i][1];
  }
  // Closing the polygon by considering the last vertex connected to the first
  area +=
    vertices[vertices.length - 1][0] * vertices[0][1] -
    vertices[0][0] * vertices[vertices.length - 1][1];
  return Math.abs(area / 2);
};
