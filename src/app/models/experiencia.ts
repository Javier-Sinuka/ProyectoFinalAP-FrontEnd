export class Experiencia {
  id?: number;
  nombreExp: string;
  lugarExp: string;
  modalidadExp: string;
  contenidoExp: string;
  tiempoExp: number;

  constructor(nombreExp: string, lugarExp: string, modalidadExp: string, contenidoExp: string, tiempoExp: number) {
    this.nombreExp = nombreExp;
    this.lugarExp = lugarExp;
    this.modalidadExp = modalidadExp;
    this.contenidoExp = contenidoExp;
    this.tiempoExp = tiempoExp;
  }
}
