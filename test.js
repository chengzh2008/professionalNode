const CIRCLE = "circle";
const SQUARE = "square";
const RECTANGLE = "rectangle";
 
var getAreaFunction = function (shape) {
  return function () {
    switch (shape) {
      case CIRCLE:
        return Math.PI * arguments[0] * arguments[0];
        break;
      case SQUARE:
        return arguments[0] * arguments[0];
        break;
      case RECTANGLE:
        return arguments[0] * arguments[1];
        break;
    }
  };
};
 
var getAreaOfCircle = getAreaFunction(CIRCLE);
console.log(getAreaOfCircle.toString());
