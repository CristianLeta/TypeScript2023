class Auto {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;

  constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.maxVelocidad = maxVelocidad;
  }

  mostrarInfo() {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Potencia: ${this.potencia}`);
    console.log(`Velocidad Máxima: ${this.maxVelocidad}`);
    console.log('-------------------');
  }

  calcularTiempo(distancia: number): number {
    const tiempo = distancia / this.maxVelocidad;
    return tiempo;
  }
}

// Se crea array de autos
const autos: Auto[] = [
  new Auto("Ford", "Falcon", 200, 250),
  new Auto("Fiat", "Argo", 100, 190),
  new Auto("Chevrolet", "Chavy", 150, 200),
  new Auto("Toyota", "Corolla", 180, 200),
  new Auto("Volkswagen", "Bora", 110, 190),
];

// Muestra los autos por pantalla
for (const auto of autos) {
  auto.mostrarInfo();
}

// Calculador de tiempo para recorrer una distancia en cada auto
const distancia = 500; // Distancia en kilómetros
for (const auto of autos) {
  const tiempoOptimo = auto.calcularTiempo(distancia);
  console.log(`El auto ${auto.modelo} tarda ${tiempoOptimo} horas en recorrer ${distancia} km.`);
}
