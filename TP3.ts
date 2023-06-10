function calculadoraDePromedio(notas: number[]): number {
    if (notas.length === 0) {
      return 0; // Retorna 0 si no hay notas
    }
  
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
  
    const promedio = suma / notas.length;
    return promedio;
  }
  
  const notasTP = [8, 9, 7, 8, 0];
  const promedioFinal = calculadoraDePromedio(notasTP);
  console.log(promedioFinal);
  