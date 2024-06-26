const calculateViewBox = (vertices) => {
    const xValues = vertices.map(([x, _]) => x);
    const yValues = vertices.map(([_, y]) => y);
    
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
  
    const width = maxX - minX;
    const height = maxY - minY;
  
    return `${minX} ${minY} ${width} ${height}`;
  };
  
  export const createSVG = (vertices) => {
    const pathData = vertices.map(([x, y], index) => {
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ') + ' Z'; // 'Z' closes the path
  
    const viewBox = calculateViewBox(vertices);
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox={viewBox}
        // style={{ border: '2px solid red' }}
      >
        <path d={pathData} stroke="#18A0FB" fill="transparent" strokeWidth="8"/>
      </svg>
    );
  };
  