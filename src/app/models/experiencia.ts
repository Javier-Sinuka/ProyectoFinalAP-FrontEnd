export class Experiencia{
  id: number;
  nombreExperiencia: string;
  modalidadExperiencia: string;
  lugarExperiencia: string;
  periodoExperiencia: string;
  contenidoExperiencia: string;

  constructor(id: number, nombreExperiencia: string, modalidadExperiencia: string,
              lugarExperiencia: string, periodoExperiencia: string,
              contenidoExperiencia: string) {
    this.id = id;
    this.nombreExperiencia = nombreExperiencia;
    this.modalidadExperiencia = modalidadExperiencia;
    this.lugarExperiencia = lugarExperiencia;
    this.periodoExperiencia = periodoExperiencia;
    this.contenidoExperiencia = contenidoExperiencia;
  }
}

