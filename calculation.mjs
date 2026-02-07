export const PI = 3.14;

export function circleArea(r) {
    return PI * r * r;
}

export function rectangleArea(l, b) {
    return l * b;
}

export function cylinderArea(r, h) {
    return 2 * PI * r * (r + h);
}
