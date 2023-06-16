class CuentaBancaria {
    saldoActual: number;
  
    constructor() {
      this.saldoActual = 0;
    }
  
    asignarFondos(monto: number) {
      if (monto > 500000) {
        this.dispararAlarma("¡Alarma! Se ha asignado un monto superior a 500000");
      }
      this.saldoActual += monto;
    }
  
    sacarFondos(monto: number) {
      if (monto > this.saldoActual) {
        this.dispararAlarma("¡Alarma! No hay suficientes fondos para realizar la operación");
      } else if (monto > 100000) {
        this.dispararAlarma("¡Alarma! Se ha intentado sacar un monto superior a 100000");
      } else {
        this.saldoActual -= monto;
      }
    }
  
    dispararAlarma(mensaje: string) {
      console.log(mensaje);
    }
  }
  
  const cuenta = new CuentaBancaria();
  cuenta.asignarFondos(350000
    );
  console.log("Saldo actual:", cuenta.saldoActual);
  
  cuenta.sacarFondos(110000);
  console.log("Saldo actual:", cuenta.saldoActual);
  
  cuenta.sacarFondos(380000);
  console.log("Saldo actual:", cuenta.saldoActual);
  
  cuenta.asignarFondos(1000000);
  console.log("Saldo actual:", cuenta.saldoActual);