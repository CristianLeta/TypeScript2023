const arreglo1 = [10, 20, 30, 40, 50];
const arreglo2 = [6, 8, 8, 20, 10];
const resultado = [0,0,0,0,0];

for (let i = 0; i < arreglo1.length; i++) {
  resultado[i] = arreglo1[i] + arreglo2[i];
}

console.log(resultado);
