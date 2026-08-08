interface Circle {
    radius: number,
}
interface ractengular {
    height: number,
    width: number,
}
interface square {
    length: number,
}
type Shape = Circle | ractengular | square
function calculateArea(shape: Shape): number {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2
    }
    if ("height" in shape && "width" in shape) {
        return shape.height * shape.width
    }
    if ("length" in shape) {
        return shape.length ** 2
    }


}