
// You should implement your task here.

module.exports = function towelSort (matrix) {
	matrix = matrix ?? [];

	return matrix.map((val, index) => {
	  if(!(index % 2)) return val;
	  
	  return val.reverse();
	}).flat();
}
