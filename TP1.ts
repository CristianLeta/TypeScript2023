const arreglo = [3, 4, 0, 3, 0, 9, 120, 5];
let mayor = arreglo[0];
let hayCero = false;

for (let i = 1; i < arreglo.length; i++) {
  if (arreglo[i] > mayor) {
    mayor = arreglo[i];
  }
  if (arreglo[i] === 0) {
    hayCero = true;
  }
}

console.log(mayor);

if (hayCero) {
  console.log("Hay un cero");
}
